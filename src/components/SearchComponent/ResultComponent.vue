<template>
  <div class="result-search container-fluid">
    <vue-headful
      title="RoFa - Kết quả tìm kiếm"
    />
    <SearchComponent
      :typeSearch="valueTypeSearch"
      :locationSearch="valueLocationSearch"
      :priceSearch="valuePriceSearch"
      @searchType="typeSearch"
      @searchLocation="locationSearch"
      @searchPrice="priceSearch"
    />
    <div class="row p-0 m-0 py-3">
      <div class="col-12 p-0 m-0">
        <span class="h3 font-weight-bold">
          {{dataSearch.length}} kết quả hiển thị
        </span>
      </div>
    </div>
    <Result :dataSearch="dataSearch" />
    <div class="row p-0 m-0 py-3">
      <div class="col-12 p-0 m-0 d-flex justify-content-center">
        <button @click="readmore" class="btn color-bg-main text-white">
          Xem thêm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent'
import Result from './Components/Result'
export default {
  props: [
    'valueTypeSearch',
    'valueLocationSearch',
    'valuePriceSearch'
  ],
  name: 'ResultSearch',
  data () {
    return {
      query: {},
      optionPrice: [
        [1000, 100000],
        [100000, 300000],
        [300000, 500000],
        [500000, 700000],
        [700000, 1000000]
      ],
      dataSearch: [],
      offset: 0,
      limit: 12,
      loading: false
    }
  },
  mounted () {
    if (this.dataSearch.length === 0) {
      this.actionData()
    }
  },
  methods: {
    async actionData () {
      await this.showLoading()
      await this.search()
      await this.hideLoading()
    },
    async readmore () {
      await this.showLoading()
      await this.ReadMoresearch()
      await this.hideLoading()
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
        loader: 'spinner',
        query: {}
      })
    },
    hideLoading () {
      this.loading.hide()
    },
    async typeSearch (value) {
      await this.$emit('searchType', value)
    },
    async locationSearch (value) {
      await this.$emit('searchLocation', value)
    },
    async priceSearch (value) {
      await this.$emit('searchPrice', value)
    },
    async search () {
      this.query = {}
      this.query.offset = 0
      this.query.limit = 12
      this.query.location = (this.valueLocationSearch !== undefined && this.valueLocationSearch !== null && this.valueLocationSearch !== '') ? this.valueLocationSearch : null
      this.query.type = (this.valueTypeSearch !== undefined && this.valueTypeSearch !== null && this.valueTypeSearch !== '') ? this.valueTypeSearch : null
      this.query.min = (this.valuePriceSearch !== undefined && this.valuePriceSearch !== null && this.valuePriceSearch !== '') ? this.optionPrice[this.valuePriceSearch][0] : null
      this.query.max = (this.valuePriceSearch !== undefined && this.valuePriceSearch !== null && this.valuePriceSearch !== '') ? this.optionPrice[this.valuePriceSearch][1] : null
      await this.$store.dispatch('search/getSearch', this.query).then(async (result) => {
        this.dataSearch = result.data
      }).catch((e) => {
      })
    },
    async ReadMoresearch () {
      this.query = {}
      this.query.offset = this.dataSearch.length
      this.query.limit = 12
      this.query.location = (this.valueLocationSearch !== undefined && this.valueLocationSearch !== null && this.valueLocationSearch !== '') ? this.valueLocationSearch : null
      this.query.type = (this.valueTypeSearch !== undefined && this.valueTypeSearch !== null && this.valueTypeSearch !== '') ? this.valueTypeSearch : null
      this.query.min = (this.valuePriceSearch !== undefined && this.valuePriceSearch !== null && this.valuePriceSearch !== '') ? this.optionPrice[this.valuePriceSearch][0] : null
      this.query.max = (this.valuePriceSearch !== undefined && this.valuePriceSearch !== null && this.valuePriceSearch !== '') ? this.optionPrice[this.valuePriceSearch][1] : null
      await this.$store.dispatch('search/getSearch', this.query).then(async (result) => {
        result.data.forEach((element) => {
          this.dataSearch.push(element)
        })
      }).catch((e) => {
      })
    }
  },
  components: {
    SearchComponent,
    Result
  }
}
</script>

<style>
</style>
