import SellerService from '../services/seller.service'

export const seller = {
  namespaced: true,
  actions: {
    async updateAccount ({ commit }, dataUser) {
      return SellerService.updateAccount(dataUser)
    }
  }
}
