<template>
  <div class="page">
    <vue-headful
      title="RoFa - Trang chủ"
    />
    <div class="w-100">
      <div class="container-fluid p-0 m-0">
        <router-view
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
  </div>
</template>

<script>
export default {
  name: 'MasterPage',
  data () {
    return {
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
      valueSearchPrice: null
    }
  },
  async mounted () {
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
    }
  },
  watch: {
  }
}
</script>

<style scoped>
.text-dash {
  text-decoration: line-through;
}
</style>
