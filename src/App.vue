<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
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
      //
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
