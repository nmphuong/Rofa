<template>
  <div id="box-search">
    <!-- Search -->
    <div class="w-100">
      <div class="container pt-2 pb-4">
        <div class="row p-0 m-0">
          <div class="col-12 text-center pb-3">
            <span class="h3 font-weight-bold">
              {{ searchLang.lookingFor }}
            </span>
          </div>
          <div class="col-md-3 py-2">
            <div class="w-100 color-bg-main box-search-item p-2">
              <p class="mb-2 text-white">{{ searchLang.type }}</p>
              <b-form-select class="w-100" v-model="typeSearchSelected" :options="typeSearchOptions"></b-form-select>
            </div>
          </div>
          <div class="col-md-3 py-2">
            <div class="w-100 color-bg-main box-search-item p-2">
              <p class="mb-2 text-white">{{ searchLang.location }}</p>
              <b-form-select class="w-100" v-model="locationSearchSelected" :options="locationSearchOptions"></b-form-select>
            </div>
          </div>
          <div class="col-md-3 py-2">
            <div class="w-100 color-bg-main box-search-item p-2">
              <p class="mb-2 text-white">{{ searchLang.price }}</p>
              <b-form-select class="w-100" v-model="priceSearchSelected" :options="priceSearchOptions"></b-form-select>
            </div>
          </div>
          <div class="col-md-3 py-2">
            <div class=" d-flex align-items-center h-100">
              <div class="w-100 box-search-item">
                <button class="btn color-bg-main text-white w-100">{{ searchLang.searchBtn }}</button>
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
  name: 'SearchComponent',
  data () {
    return {
      searchLang: searchLang,
      typeSearchSelected: null,
      typeSearchOptions: [
        { value: null, text: 'Tất cả' },
        { value: 'specialties', text: 'Đặc sản vùng miền' },
        { value: 4, text: 'Rau sạch' },
        { value: 7, text: 'Nông sản' },
        { value: 1, text: 'Thủy - Hải sản' },
        { value: 5, text: 'Vật tư thức ăn' }
      ],
      locationSearchSelected: null,
      locationSearchOptions: [
        {value: null, text: 'Tất cả'}
      ],
      priceSearchSelected: null,
      priceSearchOptions: [
        { value: null, text: 'Tất cả' },
        { value: 1, text: '1.000 - 100.000 (VNĐ) ' },
        { value: 2, text: '100.000 - 300.000 (VNĐ)' },
        { value: 3, text: '300.000 - 500.000 (VNĐ)' },
        { value: 4, text: '500.000 - 700.000 (VNĐ)' },
        { value: 5, text: '700.000 - 1.000.000 (VNĐ)' }
      ],
      dataCity: city
    }
  },
  async mounted () {
    // await this.dataCity.sortBy('city')
    await this.dataCity.sort((a, b) => {
      return a.city.localeCompare(b.city)
    })
    await this.dataCity.forEach((element, index) => {
      this.locationSearchOptions.push(
        {value: index, text: element.city}
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
