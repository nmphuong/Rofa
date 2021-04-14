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
    async getRateAmount ({ commit }, query) {
      return ProductsService.getRateAmount(query)
    },
    async getSameProduct ({ commit }, id) {
      return ProductsService.getSameProduct(id)
    },
    async getDetailProductsSpecialties ({ commit }, id) {
      return ProductsService.getDetailProductsSpecialties(id)
    },
    async getDatailNews ({ commit }, id) {
      return ProductsService.getDatailNews(id)
    },
    async addRate ({ commit }, dataRate) {
      return ProductsService.addRate(dataRate)
    }
  }
}
