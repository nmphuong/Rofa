import Vue from 'vue'
import Router from 'vue-router'
import Authenticate from '@/components/UserComponent/Authenticate'
import Login from '@/components/UserComponent/Login/Login'
import Register from '@/components/UserComponent/Register/Register'
import MasterPage from '@/components/MainComponent/MasterPageComponent'

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
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/',
      name: 'MasterPage',
      component: MasterPage
    }
  ]
})
