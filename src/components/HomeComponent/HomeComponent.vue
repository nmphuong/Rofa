<template>
  <div class="home">
    <div class="w-100 p-0 m-0">
      <b-carousel
        id="carousel-1"
        v-model="bannerTopHome"
        :interval="3000"
        controls
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide v-for="(banner, index) in banners" :key="index" :img-src="banner.img_banner" :class="'slide__' + index + ' slide__item'"></b-carousel-slide>
      </b-carousel>
      <ItemCard v-for="(item, index) in itemsProductHome" :key="index" :products="item" />
    </div>
  </div>
</template>

<script>
import ItemCard from './Components/ItemCardComponent'
export default {
  name: 'HomeComponent',
  props: [
    'itemsProductHome',
    'banners'
  ],
  data () {
    return {
      bannerTopHome: 0
    }
  },
  mounted () {
    //
  },
  methods: {
    //
  },
  components: {
    ItemCard
  }
}
</script>

<style>
.img-fluid {
  height: 100%!important;
  width: 100% !important;
}
.carousel-inner, .carousel  {
  width: 100%!important;
  height: auto!important;
}
.slide__item > img {
  width: 100%;
  height: auto;
}
</style>
