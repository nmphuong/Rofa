<template>
  <div id="specialties">
    <div class="w-100">
      <div class="row p-0 m-0">
        <img v-if="this.$route.path === '/products/specialties' && bannerSpecialties !== null" class="w-100" :src="bannerSpecialties.data.data[0].img_banner" alt="">
        <img v-if="this.$route.path === '/products/fresh-vegetable' && bannerFreshVegetable !== null" class="w-100" :src="bannerFreshVegetable.data.data[0].img_banner" alt="">
        <img v-if="this.$route.path === '/products/agricultural' && bannerAgricultural !== null" class="w-100" :src="bannerAgricultural.data.data[0].img_banner" alt="">
        <img v-if="this.$route.path === '/products/sea-food' && bannerSeaFood !== null" class="w-100" :src="bannerSeaFood.data.data[0].img_banner" alt="">
        <img v-if="this.$route.path === '/products/food-supplies' && bannerFoodSupplies !== null" class="w-100" :src="bannerFoodSupplies.data.data[0].img_banner" alt="">
      </div>
    </div>
    <SearchBox />
    <div class="row p-0 m-0">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <router-view
          :dataSpecialties="dataSpecialties"
          @SpecialtiesData="dataSpecialtiesFunc"
          @SpecialtiesBanner="bannerSpecialtiesFunc"
          :dataFreshVegetable="dataFreshVegetable"
          @FreshVegetableData="dataFreshVegetableFunc"
          @FreshVegetableBanner="bannerFreshVegetableFunc"
          :dataAgricultural="dataAgricultural"
          @AgriculturalData="dataAgriculturalFunc"
          @AgriculturalBanner="bannerAgriculturalFunc"
          :dataSeaFood="dataSeaFood"
          @SeaFoodData="dataSeaFoodFunc"
          @SeaFoodBanner="bannerSeaFoodFunc"
          :dataFoodSupplies="dataFoodSupplies"
          @FoodSuppliesData="dataFoodSuppliesFunc"
          @FoodSuppliesBanner="bannerFoodSuppliesFunc"
        ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '../SearchComponent/SearchComponent'
import Sidebar from '../SidebarComponent/SidebarComponent'
export default {
  props: [
    'bannerSpecialties',
    'dataSpecialties',
    'bannerFreshVegetable',
    'dataFreshVegetable',
    'bannerAgricultural',
    'dataAgricultural',
    'bannerSeaFood',
    'dataSeaFood',
    'bannerFoodSupplies',
    'dataFoodSupplies'
  ],
  name: 'ProductsComponent',
  data () {
    return {
      //
    }
  },
  mounted () {
  },
  methods: {
    async dataSpecialtiesFunc (value) {
      await this.$emit('SpecialtiesData', value)
    },
    async bannerSpecialtiesFunc (value) {
      await this.$emit('SpecialtiesBanner', value)
    },
    async dataFreshVegetableFunc (value) {
      await this.$emit('FreshVegetableData', value)
    },
    async bannerFreshVegetableFunc (value) {
      await this.$emit('FreshVegetableBanner', value)
    },
    async dataAgriculturalFunc (value) {
      await this.$emit('AgriculturalData', value)
    },
    async bannerAgriculturalFunc (value) {
      await this.$emit('AgriculturalBanner', value)
    },
    async dataSeaFoodFunc (value) {
      await this.$emit('SeaFoodData', value)
    },
    async bannerSeaFoodFunc (value) {
      await this.$emit('SeaFoodBanner', value)
    },
    async dataFoodSuppliesFunc (value) {
      await this.$emit('FoodSuppliesData', value)
    },
    async bannerFoodSuppliesFunc (value) {
      await this.$emit('FoodSuppliesBanner', value)
    }
  },
  components: {
    SearchBox,
    Sidebar
  }
}
</script>

<style>
</style>
