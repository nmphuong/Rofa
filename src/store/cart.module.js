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
    },
    async confirmCart ({ commit }, id) {
      return CartService.confirmCart(id)
    },
    async confirmOrderPayment ({ commit }, data) {
      return CartService.confirmOrderPayment(data)
    },
    async historyOrder ({ commit }, type) {
      return CartService.historyOrder(type)
    },
    async cancelOrder ({ commit }, query) {
      return CartService.cancelOrder(query)
    },
    async detailOrder ({ commit }, id) {
      return CartService.detailOrder(id)
    }
  }
}
