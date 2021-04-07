<template>
  <div class="title-component col-lg-2 col-md-3 col-sm-4 col-6 p-0 m-0 text-dark">
    <b-link v-if="datas.images !== undefined" :to="'/products/' + datas.slug" class="text-dark">
      <div class="w-100">
        <div class="row p-0 m-0">
          <div class="col-12 p-0 m-0">
            <div class="row p-0 m-0">
              <div class="col-12 p-1 m-0">
                <div class="__card pb-5 position-relative">
                  <div class="discount_code position-absolute p-1 pb-3 font-weight-bold text-center" v-if="datas.discount_code !== null && datas.discount_code !== undefined">
                    <p class="mb-0 text-white">Giảm</p>
                    <span class="text-danger">{{datas.discount_code}}%</span>
                  </div>
                  <div v-if="Array.isArray(datas.images)" class="w-100 image">
                    <img class="w-100" :src="datas.images[0]" alt="">
                  </div>
                  <div v-else class="w-100 image">
                    <img class="w-100" :src="datas.images" alt="">
                  </div>
                  <div class="w-100 name-product px-2">
                    <span>{{datas.name}}</span>
                  </div>
                  <div class="w-100 price-product px-2">
                    <p class="m-0 p-0"><b-icon-geo-alt-fill></b-icon-geo-alt-fill>{{datas.location}}</p>
                    <span :class="((datas.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(datas.price)}}</span>&nbsp;&nbsp;
                    <span v-if="datas.promotion_price !== null" class="font-weight-bold text-danger">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(datas.promotion_price)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-link>
    <b-link v-else :to="'/news/' + datas.id" class="text-dark">
      <div class="w-100">
        <div class="row p-0 m-0">
          <div class="col-12 p-0 m-0">
            <div class="row p-0 m-0">
              <div class="col-12 p-1 m-0">
                <div class="__card pb-5 position-relative">
                  <div class="discount_code position-absolute p-1 pb-3 font-weight-bold text-center" v-if="datas.discount_code !== null && datas.discount_code !== undefined">
                    <p class="mb-0 text-white">Giảm</p>
                    <span class="text-danger">{{datas.discount_code}}%</span>
                  </div>
                  <div class="w-100 image">
                    <img class="w-100" :src="datas.url_img" alt="">
                  </div>
                  <div class="w-100 name-product px-2">
                    <span>{{datas.name}}</span>
                  </div>
                  <div class="w-100 px-2">
                    <div class="name-product">
                    <p class="m-0 p-0">{{datas.post_author}}</p>
                    </div>
                    <div class="name-product">
                    <p class="m-0 p-0 font-weight-bold">{{datas.title}}</p>
                    </div>
                    <div class="name-product">
                    <p class="m-0 p-0">{{datas.description}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-link>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent',
  props: [
    'datas'
  ],
  data () {
    return {
      //
    }
  },
  mounted () {
    //
  },
  methods: {
    //
  }
}
</script>

<style scoped>
.image img {
  height: 150px;
}
.__card:hover {
  box-shadow: 0px 0px 5px 5px rgba(163, 163, 163, 0.5);
  background: rgba(255, 255, 255, 0.5);
}
.discount_code {
  right: 0;
  top: 0;
  background: #e1fa00;
}
.text-dash {
  text-decoration: line-through;
}
.discount_code {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%);
}
</style>
