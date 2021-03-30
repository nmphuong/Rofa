<template>
  <div class="page">
    <vue-headful
      title="RoFa - Trang chủ"
    />
    <div class="w-100">
      <div class="container-fluid p-0 m-0">
        <router-view :banners="bannerHome" :itemsProductHome="itemsHome"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterPage',
  data () {
    return {
      loading: false,
      offset: 0,
      limit: 12,
      query: {},
      // Banner
      bannerHome: [],
      bannerHomeKey: null,
      // End Banner
      // Home
      category: 4,
      itemsHome: []
      // End Home
    }
  },
  async mounted () {
    if (this.$route.name === 'HomePage') {
      if (this.bannerHome.length === 0) {
        await this.showLoading()
        // Action
        await this.handleGetBanner()
        await this.handleGetSpecialties()
        await this.handleGetFreshVegetable()
        await this.handleGetAgricultural()
        await this.handleGetSeaFood()
        await this.handleGetFoodSupplies()
        // End Action
        await this.hideLoading()
      }
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
    // Banner
    async handleGetBanner () {
      await this.$store.dispatch('home/getBanners', this.bannerHomeKey).then((result) => {
        this.bannerHome = result.data.data
      }).catch((e) => {
      })
    },
    // End Banner
    // Home
    async handleGetSpecialties () {
      this.query.offset = 0
      this.query.limit = 12
      this.bannerHomeKey = 4
      await this.$store.dispatch('home/specialties', this.query).then(async (result) => {
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
    }
    // End Home
  }
}
</script>

<style scoped>
</style>
