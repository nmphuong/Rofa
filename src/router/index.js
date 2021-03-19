import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/UserComponent/Login/Login'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
