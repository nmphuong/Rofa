<template>
  <div class="title-component col-lg-2 col-md-3 col-sm-4 col-12 p-0 m-0">
    <div class="w-100">
      <div class="row p-0 m-0">
        <div class="col-12 p-0 m-0">
          <div class="row p-0 m-0">
            <div class="col-12 p-1 m-0">
              <div class="w-100 image">
                <img class="w-100" :src="datas.image" alt="">
              </div>
              <div class="w-100 name-product px-2">
                <span>{{datas.name}}</span>
              </div>
              <div class="w-100 price-product px-2">
                <span>Giá: {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(datas.price)}}</span>
              </div>
              <div class="w-100 text-center py-1">
                <button class="btn btn-buy-bg-custorm px-4 py-1">Mua</button>
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
</style>
