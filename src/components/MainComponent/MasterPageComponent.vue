<template>
  <div class="page">
    <vue-headful
      title="RoFa - Trang chủ"
    />
    <div class="w-100">
      <div class="container-fluid p-0 m-0">
        <router-view
          :infoUser="infoUser"
          :dataHome="dataHome"
          :dataBannerHome="dataBannerHome"
          :dataSpecialties="dataSpecialties"
          :bannerSpecialties="bannerSpecialties"
          :dataFreshVegetable="dataFreshVegetable"
          :bannerFreshVegetable="bannerFreshVegetable"
          :dataAgricultural="dataAgricultural"
          :bannerAgricultural="bannerAgricultural"
          :dataSeaFood="dataSeaFood"
          :bannerSeaFood="bannerSeaFood"
          :dataFoodSupplies="dataFoodSupplies"
          :bannerFoodSupplies="bannerFoodSupplies"
          :valueTypeSearch="valueSearchType"
          :valueLocationSearch="valueSearchLocation"
          :valuePriceSearch="valueSearchPrice"
          @HomeData="dataHomeFunc"
          @HomeBanner="bannerHomeFunc"
          @SpecialtiesData="dataSpecialtiesFunc"
          @SpecialtiesBanner="bannerSpecialtiesFunc"
          @FreshVegetableData="dataFreshVegetableFunc"
          @FreshVegetableBanner="bannerFreshVegetableFunc"
          @AgriculturalData="dataAgriculturalFunc"
          @AgriculturalBanner="bannerAgriculturalFunc"
          @SeaFoodData="dataSeaFoodFunc"
          @SeaFoodBanner="bannerSeaFoodFunc"
          @FoodSuppliesData="dataFoodSuppliesFunc"
          @FoodSuppliesBanner="bannerFoodSuppliesFunc"
          @searchType="typeSearch"
          @searchLocation="locationSearch"
          @searchPrice="priceSearch"
        ></router-view>
      </div>
    </div>
    <div class="ads">
      <b-modal id="ads-md" centered v-model="modalAds" hide-footer hide-header>
        <b-icon-x-circle-fill @click="() => {this.modalAds = false}" class="close-modal"></b-icon-x-circle-fill>
        <div class="cnt-ads" style="background-image: url('https://cf.shopee.vn/file/357a79dcaa7c695ca8557d8eb4f63107_xxhdpi')"></div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import '@/assets/script'
export default {
  props: [
    'infoUser'
  ],
  name: 'MasterPage',
  data () {
    return {
      modalAds: false,
      loading: false,
      dataHome: null,
      dataBannerHome: null,
      dataSpecialties: null,
      bannerSpecialties: null,
      dataFreshVegetable: null,
      bannerFreshVegetable: null,
      dataAgricultural: null,
      bannerAgricultural: null,
      dataSeaFood: null,
      bannerSeaFood: null,
      dataFoodSupplies: null,
      bannerFoodSupplies: null,
      valueSearchType: null,
      valueSearchLocation: null,
      valueSearchPrice: null,
      pathCheckRoute: ['/cart']
    }
  },
  async mounted () {
    this.showModal()
    if (this.pathCheckRoute.includes(this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('/'), this.$router.history.current.path.length))) {
      this.checkProfile()
    }
  },
  methods: {
    showModal () {
      this.modalAds = true
    },
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
    async typeSearch (value) {
      this.valueSearchType = value
    },
    async locationSearch (value) {
      this.valueSearchLocation = value
    },
    async priceSearch (value) {
      this.valueSearchPrice = value
    },
    async dataHomeFunc (value) {
      this.dataHome = value
    },
    async bannerHomeFunc (value) {
      this.dataBannerHome = value
    },
    async dataSpecialtiesFunc (value) {
      this.dataSpecialties = value
    },
    async bannerSpecialtiesFunc (value) {
      this.bannerSpecialties = value
    },
    async dataFreshVegetableFunc (value) {
      this.dataFreshVegetable = value
    },
    async bannerFreshVegetableFunc (value) {
      this.bannerFreshVegetable = value
    },
    async dataAgriculturalFunc (value) {
      this.dataAgricultural = value
    },
    async bannerAgriculturalFunc (value) {
      this.bannerAgricultural = value
    },
    async dataSeaFoodFunc (value) {
      this.dataSeaFood = value
    },
    async bannerSeaFoodFunc (value) {
      this.bannerSeaFood = value
    },
    async dataFoodSuppliesFunc (value) {
      this.dataFoodSupplies = value
    },
    async bannerFoodSuppliesFunc (value) {
      this.bannerFoodSupplies = value
    },
    async checkProfile () {
      var loginCustomer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
      if (loginCustomer === undefined || loginCustomer === null || loginCustomer.loging === false) {
        this.$router.push('/user/login')
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.pathCheckRoute.includes(to.path)) {
        this.checkProfile()
      }
    }
  }
}
</script>

<style>
.text-dash {
  text-decoration: line-through;
}
#ads-md___BV_modal_content_ {
  background-color: rgba(0, 0, 0, 0)!important;
  border: none;
  color: #fff;
  text-align: center;
  padding: 2em 0em;
}
.cnt-ads {
  width: 100%;
  height: 500px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.close-modal {
  font-size: 2em;
  position: absolute;
  right: 0;
  top: 0;
  color: #9c9c9c;
}
</style>
