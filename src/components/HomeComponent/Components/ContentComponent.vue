<template>
  <div class="title-component col-lg-2 col-md-3 col-sm-4 col-6 p-0 m-0">
    <div class="w-100">
      <div class="row p-0 m-0">
        <div class="col-12 p-0 m-0">
          <div class="row p-0 m-0">
            <div class="col-12 p-1 m-0">
              <div class="__card pb-5">
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
                  <p class="m-0 p-đ font-weight-bold"><b-icon-geo-alt-fill></b-icon-geo-alt-fill>{{datas.location}}</p>
                  <span class="font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(datas.price)}}</span>
                </div>
                <!-- <div class="w-100 text-center py-1">
                  <button class="btn btn-buy-bg-custorm px-4 py-1">Mua</button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
</style>
