import HomeService from '../services/home.service'

export const home = {
  namespaced: true,
  actions: {
    async getBanners ({ commit }) {
      return HomeService.getBanners()
    }
  }
}
