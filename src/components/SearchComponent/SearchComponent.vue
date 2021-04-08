<template>
  <div id="box-search">
    <!-- Search -->
    <div class="w-100">
      <div class="container pt-2 pb-4">
        <div class="row p-0 m-0 justify-content-center">
          <div class="col-12 text-center pb-3">
            <span class="h3 font-weight-bold">
              {{ searchLang.lookingFor }}
            </span>
          </div>
          <div class="col-md-3 py-2">
            <div class="w-100 color-bg-main box-search-item p-2">
              <p class="mb-2 text-white">{{ searchLang.type }}</p>
              <b-form-select v-if="this.$router.history.current.path !== '/search/result'" @change="emitConditionSearch" class="w-100" v-model="typeSearchSelected" :options="typeSearchOptions"></b-form-select>
              <b-form-select v-if="this.$router.history.current.path === '/search/result'" @change="searchParent" class="w-100" v-model="typeSearchSelected" :options="typeSearchOptions"></b-form-select>
            </div>
          </div>
          <div class="col-md-3 py-2">
            <div class="w-100 color-bg-main box-search-item p-2">
              <p class="mb-2 text-white">{{ searchLang.location }}</p>
              <b-form-select v-if="this.$router.history.current.path !== '/search/result'" @change="emitConditionSearch" class="w-100" v-model="locationSearchSelected" :options="locationSearchOptions"></b-form-select>
              <b-form-select v-if="this.$router.history.current.path === '/search/result'" @change="searchParent" class="w-100" v-model="locationSearchSelected" :options="locationSearchOptions"></b-form-select>
            </div>
          </div>
          <div class="col-md-3 py-2">
            <div class="w-100 color-bg-main box-search-item p-2">
              <p class="mb-2 text-white">{{ searchLang.price }}</p>
              <b-form-select v-if="this.$router.history.current.path !== '/search/result'" @change="emitConditionSearch" class="w-100" v-model="priceSearchSelected" :options="priceSearchOptions"></b-form-select>
              <b-form-select v-if="this.$router.history.current.path === '/search/result'" @change="searchParent" class="w-100" v-model="priceSearchSelected" :options="priceSearchOptions"></b-form-select>
            </div>
          </div>
          <div class="col-md-3 py-2" v-if="this.$router.history.current.path !== '/search/result'">
            <div class=" d-flex align-items-center h-100">
              <div class="w-100 box-search-item">
                <b-link v-if="this.$router.history.current.path !== '/search/result'" :disabled="typeSearchSelected === null && locationSearchSelected === null && priceSearchSelected === null" to="/search/result" :class="[((typeSearchSelected === null && locationSearchSelected === null && priceSearchSelected === null) ? 'disabled ' : '') + 'btn color-bg-main text-white w-100']">{{ searchLang.searchBtn }}</b-link>
                <!-- <button v-if="this.$router.history.current.path === '/search/result'" :disabled="typeSearchSelected === null && locationSearchSelected === null && priceSearchSelected === null" @click="searchParent" :class="[((typeSearchSelected === null && locationSearchSelected === null && priceSearchSelected === null) ? 'disabled ' : '') + 'btn color-bg-main text-white w-100']">{{ searchLang.searchBtn }}</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchLang } from '../../Lang/vi/search'
import city from '../../json/city.json'
export default {
  props: [
    'typeSearch',
    'locationSearch',
    'priceSearch'
  ],
  name: 'SearchComponent',
  data () {
    return {
      searchLang: searchLang,
      typeSearchSelected: (this.typeSearch !== undefined && this.typeSearch !== null) ? this.typeSearch : null,
      typeSearchOptions: [
        { value: null, text: 'Tất cả' },
        { value: 9, text: 'Đặc sản vùng miền' },
        { value: 4, text: 'Rau sạch' },
        { value: 7, text: 'Nông sản' },
        { value: 1, text: 'Thủy - Hải sản' },
        { value: 5, text: 'Vật tư thức ăn' }
      ],
      locationSearchSelected: (this.locationSearch !== undefined && this.locationSearch !== null) ? this.locationSearch : null,
      locationSearchOptions: [
        {value: null, text: 'Tất cả'}
      ],
      priceSearchSelected: (this.priceSearch !== undefined && this.priceSearch !== null) ? this.priceSearch : null,
      priceSearchOptions: [
        { value: null, text: 'Tất cả' },
        { value: 0, text: '1.000 - 100.000 (VNĐ) ' },
        { value: 1, text: '100.000 - 300.000 (VNĐ)' },
        { value: 2, text: '300.000 - 500.000 (VNĐ)' },
        { value: 3, text: '500.000 - 700.000 (VNĐ)' },
        { value: 4, text: '700.000 - 1.000.000 (VNĐ)' }
      ],
      dataCity: city
    }
  },
  methods: {
    async searchParent () {
      await this.$emit('searchType', this.typeSearchSelected)
      await this.$emit('searchLocation', this.locationSearchSelected)
      await this.$emit('searchPrice', this.priceSearchSelected)
      await this.$parent.actionData()
    },
    async emitConditionSearch () {
      await this.$emit('searchType', this.typeSearchSelected)
      await this.$emit('searchLocation', this.locationSearchSelected)
      await this.$emit('searchPrice', this.priceSearchSelected)
    }
  },
  async mounted () {
    // await this.dataCity.sortBy('city')
    await this.dataCity.sort((a, b) => {
      return a.city.localeCompare(b.city)
    })
    await this.dataCity.forEach((element, index) => {
      this.locationSearchOptions.push(
        {value: element.city, text: element.city}
      )
    })
  }
}
</script>

<style>
.box-search-item {
  border-radius: 5px;
}
</style>
