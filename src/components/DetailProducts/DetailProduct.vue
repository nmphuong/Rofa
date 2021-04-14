<template>
  <div class="dtp-cpn py-3 container">
    <div class="row p-0 m-0" v-if="dataDetailProduct !== null && dataListRate !== null && dataRateAmount !== null && dataSameProduct !== null">
      <vue-headful
        :title="'RoFa - ' + dataDetailProduct.name"
      />
      <div class="col-md-6">
        <Images :images="dataDetailProduct.images"/>
      </div>
      <div class="col-md-6">
        <InfoProduct :dataListRate="dataListRate" :dataProduct="dataDetailProduct" />
      </div>
      <div class="col-12 p-0 py-2 m-0">
        <hr />
      </div>
      <div class="col-12">
        <Description :longDescription="dataDetailProduct.long_desc" :shortDescription="dataDetailProduct.short_desc" />
      </div>
      <div class="col-12 p-0 py-2 m-0" v-if="dataSameProduct.length !== 0 && dataRateAmount.length !== 0">
        <hr />
      </div>
      <div class="col-12">
        <Rate :dataRateAmount="dataRateAmount" />
      </div>
      <div class="col-12 p-0 py-2 m-0" v-if="dataRateAmount.length !== 0">
        <hr />
      </div>
      <div class="col-12" v-if="dataSameProduct.length !== 0">
        <RalatedProducts :dataSameProduct="dataSameProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import Images from './components/Images'
import InfoProduct from './components/InfoProduct'
import Description from './components/Description'
import Rate from './components/Rate'
import RalatedProducts from './components/RelatedProducts'
export default {
  name: 'DetailProduct',
  data () {
    return {
      id: null,
      loading: false,
      dataDetailProduct: null,
      dataListRate: null,
      dataRateAmount: null,
      dataSameProduct: null
    }
  },
  mounted () {
    this.actionLoadData()
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
        loader: 'spinner',
        query: {}
      })
    },
    hideLoading () {
      this.loading.hide()
    },
    async actionLoadData () {
      await this.showLoading()
      this.dataDetailProduct = null
      this.dataListRate = null
      this.dataRateAmount = null
      this.dataSameProduct = null
      await this.getDetailProducts()
      await this.getListRate()
      await this.getRateAmount()
      await this.getProductSame()
      await this.hideLoading()
    },
    async getDetailProducts () {
      this.id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('.') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('products/getDetailProducts', this.id).then(async (result) => {
        this.dataDetailProduct = result.data
      }).catch((e) => {
      })
    },
    async getListRate () {
      this.id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('.') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('products/getListRate', this.id).then(async (result) => {
        this.dataListRate = result.data
      }).catch((e) => {
      })
    },
    async getRateAmount () {
      this.query = {}
      this.query.offset = 0
      this.query.limit = 2
      this.query.id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('.') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('products/getRateAmount', this.query).then(async (result) => {
        this.dataRateAmount = result.data
      }).catch((e) => {
      })
    },
    async getRateAmountAll () {
      this.query = {}
      this.query.id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('.') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('products/getRateAmount', this.query).then(async (result) => {
        this.dataRateAmount = result.data
      }).catch((e) => {
      })
    },
    async getProductSame () {
      await this.$store.dispatch('products/getSameProduct', this.dataDetailProduct.seller_id.id).then(async (result) => {
        this.dataSameProduct = result.data
      }).catch((e) => {
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.actionLoadData()
    }
  },
  components: {
    Images,
    InfoProduct,
    Description,
    Rate,
    RalatedProducts
  }
}
</script>

<style>
</style>
