import HomeService from '../services/home.service'

export const home = {
  namespaced: true,
  actions: {
    async getBanners ({ commit }, keys) {
      return HomeService.getBanners(keys)
    },
    async specialties ({ commit }, query) {
      return HomeService.specialties(query)
    },
    async getProductHome ({ commit }, query) {
      return HomeService.getProductHome(query)
    },
    async getNews ({ commit }, query) {
      return HomeService.getNews(query)
    }
  }
}
