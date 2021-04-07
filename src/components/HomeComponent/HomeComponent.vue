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
        <b-carousel-slide v-for="(banner, index) in dataBannerHome" :key="index" :img-src="banner.img_banner" :class="'slide__' + index + ' slide__item'"></b-carousel-slide>
      </b-carousel>
      <SearchBox />
      <ItemCard v-for="(item, index) in dataHome" :key="index" :products="item" />
    </div>
  </div>
</template>

<script>
import ItemCard from './Components/ItemCardComponent'
import SearchBox from '../SearchComponent/SearchComponent'
export default {
  name: 'HomeComponent',
  props: [
    'dataHome',
    'dataBannerHome'
  ],
  data () {
    return {
      bannerTopHome: 0,
      offset: 0,
      limit: 12,
      query: {},
      bannerHome: [],
      bannerHomeKey: null,
      category: 4,
      itemsHome: []
    }
  },
  async mounted () {
    if (this.dataHome === null && this.dataBannerHome === null) {
      await this.actionFunction()
    }
  },
  methods: {
    async actionFunction () {
      await this.$parent.showLoading()
      await this.handleGetBanner()
      await this.handleGetSpecialties()
      await this.handleGetFreshVegetable()
      await this.handleGetAgricultural()
      await this.handleGetSeaFood()
      await this.handleGetFoodSupplies()
      await this.handleGetNews()
      await this.$emit('HomeData', this.itemsHome)
      await this.$emit('HomeBanner', this.bannerHome)
      await this.$parent.hideLoading()
    },
    async handleGetBanner () {
      await this.$store.dispatch('home/getBanners').then((result) => {
        this.bannerHome = result.data.data
      }).catch((e) => {
      })
    },
    async handleGetSpecialties () {
      this.query.category_id = 9
      this.query.offset = 0
      this.query.limit = 12
      this.bannerHomeKey = 999
      await this.$store.dispatch('home/getProductHome', this.query).then(async (result) => {
        await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then(async (banner) => {
          await this.itemsHome.push({
            title: 'Đặc sản vùng miền',
            banner: banner.data.data,
            link: '/products/specialties',
            data: result.data.data
          })
        }).catch((e) => {
        })
      }).catch((e) => {
      })
    },
    async handleGetFreshVegetable () {
      this.query.category_id = 4
      this.query.offset = 0
      this.query.limit = 12
      this.bannerHomeKey = 4
      await this.$store.dispatch('home/getProductHome', this.query).then(async (result) => {
        await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then(async (banner) => {
          await this.itemsHome.push({
            title: 'Rau Sạch',
            banner: banner.data.data,
            link: '/products/fresh-vegetable',
            data: result.data.data
          })
        }).catch((e) => {
        })
      }).catch((e) => {
      })
    },
    async handleGetAgricultural () {
      this.query.category_id = 7
      this.query.offset = 0
      this.query.limit = 12
      this.bannerHomeKey = 7
      await this.$store.dispatch('home/getProductHome', this.query).then(async (result) => {
        await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then(async (banner) => {
          await this.itemsHome.push({
            title: 'Nông Sản',
            banner: banner.data.data,
            link: '/products/agricultural',
            data: result.data.data
          })
        }).catch((e) => {
        })
      }).catch((e) => {
      })
    },
    async handleGetSeaFood () {
      this.query.category_id = 1
      this.query.offset = 0
      this.query.limit = 12
      this.bannerHomeKey = 1
      await this.$store.dispatch('home/getProductHome', this.query).then(async (result) => {
        await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then(async (banner) => {
          await this.itemsHome.push({
            title: 'Thủy - Hải Sản',
            banner: banner.data.data,
            link: '/products/sea-food',
            data: result.data.data
          })
        }).catch((e) => {
        })
      }).catch((e) => {
      })
    },
    async handleGetFoodSupplies () {
      this.query.category_id = 5
      this.query.offset = 0
      this.query.limit = 12
      this.bannerHomeKey = 5
      await this.$store.dispatch('home/getProductHome', this.query).then(async (result) => {
        await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then(async (banner) => {
          await this.itemsHome.push({
            title: 'Vật Tư Thức Ăn',
            banner: banner.data.data,
            link: '/products/food-supplies',
            data: result.data.data
          })
        }).catch((e) => {
        })
      }).catch((e) => {
      })
    },
    async handleGetNews () {
      this.query.offset = 0
      this.query.limit = 18
      await this.$store.dispatch('home/getNews', this.query).then(async (result) => {
        await this.itemsHome.push({
          title: 'Tin Tức',
          banner: null,
          link: '/news/news',
          data: result.data
        })
      }).catch((e) => {
      })
    }
  },
  components: {
    SearchBox,
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
