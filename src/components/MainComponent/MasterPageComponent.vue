<template>
  <div class="page">
    <vue-headful
      title="RoFa - Trang chủ"
    />
    <div class="w-100">
      <div class="container-fluid p-0 m-0">
        <router-view :banners="bannerHome" :itemsProductHome="items"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterPage',
  data () {
    return {
      error_messages: '',
      items: [
        {
          title: 'Đặc sản vùng miền',
          data: [
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang kính chào quý khách đến tham quan và vui chơi', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'}
          ]
        },
        {
          title: 'Rau sạch',
          data: [
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'}
          ]
        },
        {
          title: 'Nông sản',
          data: [
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'}
          ]
        },
        {
          title: 'Thủy hải sản',
          data: [
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'}
          ]
        },
        {
          title: 'Vật tư thức ăn',
          data: [
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'},
            {id: '1', image: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg', name: 'Biển Nha Trang', price: '500000000'}
          ]
        }
      ],
      bannerHome: []
    }
  },
  mounted () {
    if (this.$route.name === 'HomePage') {
      if (this.bannerHome.length === 0) {
        this.handleGetBanner()
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
    async handleGetBanner () {
      this.showLoading()
      this.error_messages = ''
      this.account_incorrect = false
      await this.$store.dispatch('home/getBanners').then((result) => {
        this.error_messages = ''
        this.bannerHome = result.data.data
        this.hideLoading()
      }).catch((e) => {
        this.hideLoading()
      })
    }
  }
}
</script>

<style scoped>
</style>
