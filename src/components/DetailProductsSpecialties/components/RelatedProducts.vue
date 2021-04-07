<template>
  <div class="rate w-100" id="related">
    <div class="row p-0 m-0">
      <div class="col-12">
        <p class="text-uppercase">Các sản phẩm khác của Shop</p>
      </div>
      <div class="col-12 py-2">
        <div class="row p-0 m-0 py-2">
          <b-link :to="'/products/' + item.slug" v-for="(item, index) in dataSameProduct" :key="index" class="col-lg-2 col-md-3 col-sm-4 col-6 m-0 px-1 text-dark">
            <div class="w-100">
              <div class="row p-0 m-0">
                <div class="col-12 p-0 m-0">
                  <div class="row p-0 m-0">
                    <div class="col-12 p-0 py-1 m-0">
                      <div class="__card pb-3">
                        <div v-if="Array.isArray(item.images)" class="w-100 image">
                          <img class="w-100" :src="item.images[0]" alt="">
                        </div>
                        <div v-else class="w-100 image">
                          <img class="w-100" :src="item.images" alt="">
                        </div>
                        <div class="w-100 name-product px-2">
                          <span>{{item.name}}</span>
                        </div>
                        <div class="w-100 price-product px-2">
                          <p class="m-0 p-0"><b-icon-geo-alt-fill></b-icon-geo-alt-fill>{{item.location}}</p>
                          <span class="font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataSameProduct'
  ],
  name: 'RelatedProducts',
  data () {
    return {
      //
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
