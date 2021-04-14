<template>
  <div class="w-100">
    <router-view :dataUser="infoUser" :dataCart="dataComfirm" @dataComfirmOrder="confirmData"></router-view>
  </div>
</template>

<script>
export default {
  props: [
    'infoUser'
  ],
  name: 'CartUser',
  data () {
    return {
      dataComfirm: []
    }
  },
  mounted () {
    if (this.$router.history.current.path === '/cart/confirm') {
      if (this.dataComfirm.length === 0) {
        this.$router.push('/cart')
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
    async confirmData (value) {
      this.dataComfirm = value
    }
  }
}
</script>

<style>
</style>
