import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
import { home } from './home.module'
import { products } from './products.module'
import { search } from './search.module'
import { cart } from './cart.module'
import { seller } from './seller.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    home,
    products,
    search,
    cart,
    seller
  }
})
