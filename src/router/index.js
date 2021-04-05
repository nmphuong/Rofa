import Vue from 'vue'
import Router from 'vue-router'

import Authenticate from '@/components/UserComponent/Authenticate'
import Login from '@/components/UserComponent/Login/Login'
import Register from '@/components/UserComponent/Register/Register'

import MasterPage from '@/components/MainComponent/MasterPageComponent'
import HomePage from '@/components/HomeComponent/HomeComponent'

import Info from '@/components/Info/Info'

import Contact from '@/components/ContactComponent/ContactComponent'

import Product from '@/components/ProductsComponent/ProductsComponent'
import Specialties from '@/components/ProductsComponent/Components/Specialties/Specialties'
import FreshVegetable from '@/components/ProductsComponent/Components/FreshVegetable/FreshVegetable'
import Agricultural from '@/components/ProductsComponent/Components/Agricultural/Agricultural'
import SeaFood from '@/components/ProductsComponent/Components/SeaFood/SeaFood'
import FoodSupplies from '@/components/ProductsComponent/Components/FoodSupplies/FoodSupplies'
//
import Seller from '@/components/SellerComponent/SellerComponent'
import DashBoard from '@/components/SellerComponent/Components/DashboardComponent/DashboardComponent'
import AddProduct from '@/components/SellerComponent/Components/AddProduct/AddProduct'
import ViewProduct from '@/components/SellerComponent/Components/ViewProduct/ViewProduct'

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
          path: 'gioi-thieu',
          name: 'Info',
          component: Info
        },
        {
          path: 'contacts',
          name: 'Contact',
          component: Contact
        },
        {
          path: 'products',
          component: Product,
          children: [
            {
              path: 'specialties',
              component: Specialties
            },
            {
              path: 'fresh-vegetable',
              component: FreshVegetable
            },
            {
              path: 'agricultural',
              component: Agricultural
            },
            {
              path: 'sea-food',
              component: SeaFood
            },
            {
              path: 'food-supplies',
              component: FoodSupplies
            }
          ]
        }
      ]
    },
    {
      path: '/seller',
      component: Seller,
      children: [
        {
          path: 'dashboard',
          component: DashBoard
        },
        {
          path: 'add-product',
          component: AddProduct
        },
        {
          path: 'view-product',
          component: ViewProduct
        }
      ]
    }
  ]
})
