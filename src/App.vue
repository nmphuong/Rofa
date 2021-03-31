<template>
  <div id="app">
    <Header :infoUser="infoUser" :isCustomer ="isCustomer" :isSeller="isSeller" />
    <router-view :loginvs="loginvs"></router-view>
    <Footer v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register' && this.$route.name !== 'Authenticate'" />
  </div>
</template>

<script>
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import './assets/script'
export default {
  name: 'App',
  data () {
    return {
      isCustomer: false,
      isSeller: false,
      infoUser: null,
      loginvs: 'customer'
    }
  },
  mounted () {
    this.info()
  },
  methods: {
    loginWith (vs) {
      var loading = this.$loading.show({
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
      var Oaj0mZteIDsw3vgVxYCbcustomers = ''
      var Oaj0mZteIDsw3vgVxYCbsellers = ''
      var customer = null
      var seller = null
      if (vs === 'customer') {
        customer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
        if (customer !== null) {
          Oaj0mZteIDsw3vgVxYCbcustomers = '{"token":"' + customer.token + '", "loging":' + true + '}'
          localStorage.setItem('Oaj0mZteIDsw3vgVxYCbcustomers', Oaj0mZteIDsw3vgVxYCbcustomers)
          seller = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
          if (seller !== null) {
            Oaj0mZteIDsw3vgVxYCbsellers = '{"token":"' + seller.token + '", "loging":' + false + '}'
            localStorage.setItem('Oaj0mZteIDsw3vgVxYCbsellers', Oaj0mZteIDsw3vgVxYCbsellers)
          }
          this.$store.dispatch('auth/getProfileCustomer').then((result) => {
            this.infoUser = result
            this.isCustomer = true
            this.isSeller = false
            this.info()
            loading.hide()
          }).catch((e) => {
            this.isCustomer = false
            this.isSeller = false
            this.infoUser = null
            localStorage.removeItem('Oaj0mZteIDsw3vgVxYCbcustomers')
            this.$router.push('/user/login')
          })
        } else {
          this.loginvs = vs
          this.$router.push('/user/login')
          loading.hide()
        }
      } else if (vs === 'seller') {
        seller = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
        if (seller !== null) {
          Oaj0mZteIDsw3vgVxYCbsellers = '{"token":"' + seller.token + '", "loging":' + true + '}'
          localStorage.setItem('Oaj0mZteIDsw3vgVxYCbsellers', Oaj0mZteIDsw3vgVxYCbsellers)
          customer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
          if (customer !== null) {
            Oaj0mZteIDsw3vgVxYCbcustomers = '{"token":"' + customer.token + '", "loging":' + false + '}'
            localStorage.setItem('Oaj0mZteIDsw3vgVxYCbcustomers', Oaj0mZteIDsw3vgVxYCbcustomers)
          }
          this.$store.dispatch('auth/getProfileSellers').then((result) => {
            this.infoUser = result
            this.isCustomer = false
            this.isSeller = true
            this.info()
            loading.hide()
          }).catch((e) => {
            this.isCustomer = false
            this.isSeller = false
            this.infoUser = null
            localStorage.removeItem('Oaj0mZteIDsw3vgVxYCbsellers')
            this.$router.push('/user/login')
          })
        } else {
          this.loginvs = vs
          this.$router.push('/user/login')
          loading.hide()
        }
      }
    },
    logout () {
      this.isCustomer = false
      this.isSeller = false
      this.infoUser = null
      var customer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
      if (customer !== null) {
        var Oaj0mZteIDsw3vgVxYCbcustomers = '{"token":"' + customer.token + '", "loging":' + false + '}'
        localStorage.setItem('Oaj0mZteIDsw3vgVxYCbcustomers', Oaj0mZteIDsw3vgVxYCbcustomers)
      }
      var seller = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
      if (seller !== null) {
        var Oaj0mZteIDsw3vgVxYCbsellers = '{"token":"' + seller.token + '", "loging":' + false + '}'
        localStorage.setItem('Oaj0mZteIDsw3vgVxYCbsellers', Oaj0mZteIDsw3vgVxYCbsellers)
      }
    },
    info () {
      var loginCustomer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
      var loginSellers = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
      if (loginCustomer !== null && loginCustomer.loging === true) {
        this.$store.dispatch('auth/getProfileCustomer').then((result) => {
          this.infoUser = result
          this.isCustomer = true
          this.isSeller = false
        }).catch((e) => {
        })
      } else if (loginSellers !== null && loginSellers.loging === true) {
        this.$store.dispatch('auth/getProfileSellers').then((result) => {
          this.infoUser = result
          this.isSeller = true
          this.isCustomer = false
        }).catch((e) => {
        })
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'Login' && to.name !== 'Register' && to.name !== 'FortgotPassword') {
        var loginCustomer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
        var loginSellers = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
        var e = this
        if (loginCustomer !== null && loginCustomer.loging === true) {
          e.$store.dispatch('auth/getProfileCustomer').then((result) => {
            e.infoUser = result
            e.isCustomer = true
            e.isSeller = false
          }).catch((e) => {
          })
        } else if (loginSellers !== null && loginSellers.loging === true) {
          e.$store.dispatch('auth/getProfileSellers').then((result) => {
            e.infoUser = result
            e.isSeller = true
            e.isCustomer = false
          }).catch((e) => {
          })
        }
      }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import'./assets/general.css';
</style>
