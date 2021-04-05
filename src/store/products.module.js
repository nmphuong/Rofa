import ProductsService from '../services/products.service'

export const products = {
  namespaced: true,
  actions: {
    async getDetailProducts ({ commit }, id) {
      return ProductsService.getDetailProducts(id)
    },
    async getListRate ({ commit }, id) {
      return ProductsService.getListRate(id)
    },
    async getRateAmount ({ commit }, id) {
      return ProductsService.getRateAmount(id)
    }
  }
}
