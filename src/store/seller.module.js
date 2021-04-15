import SellerService from '../services/seller.service'
import ProductsService from '../services/products.service'

export const seller = {
  namespaced: true,
  actions: {
    async updateAccount ({ commit }, dataUser) {
      return SellerService.updateAccount(dataUser)
    },
    async getProductSeller ({ commit }, id) {
      return ProductsService.getProductSeller(id)
    }
  }
}
