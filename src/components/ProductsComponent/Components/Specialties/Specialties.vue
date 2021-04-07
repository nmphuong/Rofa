<template>
  <div class="row p-0 m-0" v-if="dataSpecialties !== null">
    <b-link :to="'/specialties/' + data.id" v-for="(data, index) in dataSpecialties" :key="index" class="specialties-component col-lg-3 col-md-4 col-sm-4 col-6 p-0 m-0 text-dark">
      <div class="w-100">
        <div class="row p-0 m-0">
          <div class="col-12 p-0 m-0">
            <div class="row p-0 m-0">
              <div class="col-12 p-1 m-0">
                <div class="__card pb-5 position-relative">
                  <div class="discount_code position-absolute p-1 pb-3 font-weight-bold text-center" v-if="data.discount_code !== null">
                    <p class="mb-0 text-white">Giảm</p>
                    <span class="text-danger">{{data.discount_code}}%</span>
                  </div>
                  <div v-if="Array.isArray(data.images)" class="w-100 image">
                    <img class="w-100" :src="data.images[0]" alt="">
                  </div>
                  <div v-else class="w-100 image">
                    <img class="w-100" :src="data.images" alt="">
                  </div>
                  <div class="w-100 name-product px-2">
                    <span>{{data.name}}</span>
                  </div>
                  <div class="w-100 price-product px-2">
                    <p class="m-0 p-đ font-weight-bold"><b-icon-geo-alt-fill></b-icon-geo-alt-fill>{{data.location}}</p>
                    <span :class="((data.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}}</span>&nbsp;&nbsp;
                    <span v-if="data.promotion_price !== null" class="font-weight-bold text-danger">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.promotion_price)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-link>
    <div class="col-12 py-5 d-flex justify-content-center align-items-center">
      <button class="btn color-bg-main text-white" @click="() => this.actionFunction()">
        Xem thêm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataSpecialties'
  ],
  name: 'Specialties',
  data () {
    return {
      offset: (this.dataSpecialties === null) ? 0 : this.dataSpecialties.length,
      limit: 12,
      query: {},
      bannerSpecialties: null,
      itemSpecialties: (this.dataSpecialties === null) ? [] : this.dataSpecialties
    }
  },
  async mounted () {
    if (this.dataSpecialties === null) {
      await this.actionFunction()
    }
  },
  methods: {
    showLoading () {
      this.loading = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
        color: '#10a7f7',
        width: 60,
        height: 60,
        zIndex: 99999999,
        backgroundColor: '#fff',
        loader: 'spinner'
      })
    },
    hideLoading () {
      this.loading.hide()
    },
    async actionFunction () {
      await this.showLoading()
      await this.handleGetSpecialties()
      await this.$emit('SpecialtiesBanner', this.bannerSpecialties)
      await this.$emit('SpecialtiesData', this.itemSpecialties)
      await this.hideLoading()
    },
    async handleGetSpecialties () {
      if (this.dataSpecialties === null) {
        this.query.offset = 0
      } else {
        this.query.offset = this.dataSpecialties.length
        this.offset = this.dataSpecialties.length
      }
      this.query.limit = 12
      this.bannerHomeKey = 999
      this.query.category_id = 9
      await this.$store.dispatch('home/getProductHome', this.query).then(async (result) => {
        await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then(async (banner) => {
          this.bannerSpecialties = banner
          result.data.data.forEach((element) => {
            this.itemSpecialties.push(element)
          })
        }).catch((e) => {
        })
      }).catch((e) => {
      })
    }
  }
}
</script>

<style>
.image img {
  height: 150px;
}
.__card:hover {
  box-shadow: 0px 0px 5px 5px rgba(163, 163, 163, 0.5);
  background: rgba(255, 255, 255, 0.5);
}
</style>
