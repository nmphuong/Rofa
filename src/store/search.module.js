import SearchService from '../services/search.service'

export const search = {
  namespaced: true,
  actions: {
    async getSearch ({ commit }, query) {
      return SearchService.getSearch(query)
    }
  }
}
