<template>
  <div class="title-component">
    <div class="w-100">
      <div class="row p-0 m-0">
        <div class="bg-title col-12 p-0 m-0">
          <div class="row p-0 m-0">
            <div class="__title-step h-100 py-3 px-5 text-uppercase h5 font-weight-bold">{{products.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <Banner v-for="(banner, index) in products.banner" :key="index" :banner="banner.img_banner" />
    <div class="row p-0 m-0">
      <Content v-for="(data, index) in products.data" :key="index" :datas="data" />
    </div>
    <div class="row p-0 m-0 justify-content-center py-3">
      <b-link v-bind:class="['nav-link','text-white','color-bg-main','link-nav-icon', 'readmore']" :to="products.link">
        Xem Thêm
      </b-link>
    </div>
  </div>
</template>

<script>
import Content from './ContentComponent'
import Banner from './BannerComponent'
export default {
  name: 'ItemCardComponent',
  props: [
    'products'
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
  },
  components: {
    Banner,
    Content
  }
}
</script>

<style>
.readmore {
  border-radius: 50px!important;
  color: #fff!important;
}
</style>
