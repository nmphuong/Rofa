import CartService from '../services/cart.service'

export const cart = {
  namespaced: true,
  actions: {
    async addCart ({ commit }, query) {
      return CartService.addCart(query)
    },
    async getMyCart ({ commit }) {
      return CartService.getMyCart()
    },
    async deleteProductCart ({ commit }, id) {
      return CartService.deleteProductCart(id)
    },
    async updateQuantity ({ commit }, query) {
      return CartService.updateQuantity(query)
    }
  }
}
