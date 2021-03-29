<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/HeaderComponent/Header'
import './assets/script'
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    Header
  }
}
</script>

<style>
@import'./assets/general.css';
</style>
