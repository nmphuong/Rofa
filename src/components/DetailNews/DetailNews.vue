<template>
  <div class="dtp-cpn py-3 container">
    <div class="row p-0 m-0" v-if="dataNews !== null">
      <div class="col-md-12">
        <Content :dataNews="dataNews" />
      </div>
    </div>
  </div>
</template>

<script>
import Content from './components/ContentComponent'
export default {
  name: 'DetailNews',
  data () {
    return {
      id: null,
      loading: false,
      dataNews: null
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
      this.dataNews = null
      await this.getDetailNews()
      await this.hideLoading()
    },
    async getDetailNews () {
      this.id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('/') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('products/getDatailNews', this.id).then(async (result) => {
        this.dataNews = result.data[0]
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
    Content
  }
}
</script>

<style>
</style>
