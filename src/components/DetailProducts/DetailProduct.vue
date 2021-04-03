<template>
  <div class="dtp-cpn py-3 container">
    <div class="row p-0 m-0" v-if="dataDetailProduct !== null && dataListRate !== null && dataRateAmount !== null">
      <div class="col-md-6">
        <Images :images="dataDetailProduct.images"/>
      </div>
      <div class="col-md-6">
        <InfoProduct :dataListRate="dataListRate" :dataProduct="dataDetailProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import Images from './components/Images'
import InfoProduct from './components/InfoProduct'
export default {
  name: 'DetailProduct',
  data () {
    return {
      id: null,
      loading: false,
      dataDetailProduct: null,
      dataListRate: null,
      dataRateAmount: null
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
        loader: 'spinner'
      })
    },
    hideLoading () {
      this.loading.hide()
    },
    async actionLoadData () {
      await this.showLoading()
      await this.getDetailProducts()
      await this.getListRate()
      await this.getRateAmount()
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
      this.id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('.') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('products/getRateAmount', this.id).then(async (result) => {
        this.dataRateAmount = result.data
      }).catch((e) => {
      })
    }
  },
  components: {
    Images,
    InfoProduct
  }
}
</script>

<style>
</style>
