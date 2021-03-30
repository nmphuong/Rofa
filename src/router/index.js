import Vue from 'vue'
import Router from 'vue-router'

import Authenticate from '@/components/UserComponent/Authenticate'
import Login from '@/components/UserComponent/Login/Login'
import Register from '@/components/UserComponent/Register/Register'

import MasterPage from '@/components/MainComponent/MasterPageComponent'
import HomePage from '@/components/HomeComponent/HomeComponent'

import Info from '@/components/Info/Info'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/user',
      component: Authenticate,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/',
      component: MasterPage,
      children: [
        {
          path: '/',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/gioi-thieu',
          name: 'Info',
          component: Info
        }
      ]
    }
  ]
})
