import Vue from 'vue'
import Router from 'vue-router'
import Authenticate from '@/components/UserComponent/Authenticate'
import Login from '@/components/UserComponent/Login/Login'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/user',
      name: 'Authenticate',
      component: Authenticate,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})
