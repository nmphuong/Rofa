import HomeService from '../services/home.service'

export const home = {
  namespaced: true,
  actions: {
    async getBanners ({ commit }) {
      return HomeService.getBanners()
    },
    async specialties ({ commit }, query) {
      return HomeService.specialties(query)
    },
    async getProductHome ({ commit }, query) {
      return HomeService.getProductHome(query)
    }
  }
}
