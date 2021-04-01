import { getQuerySchema, postQuerySchema } from '../api/api.call'

class HomeService {
  async getBanners (keys) {
    var key = ''
    if (keys !== undefined && keys !== 'undefined' && keys !== null && keys !== 'null' && keys !== '') {
      key = '?key=' + keys
    }
    var data = await getQuerySchema({
      token: false,
      path: 'customer/get-banner' + key
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
  async specialties (query) {
    var args = Object.assign({}, query)
    var offset = 0
    var limit = 0
    if (args.hasOwnProperty('offset') && args.hasOwnProperty('limit')) {
      offset = args.offset
      limit = args.limit
    } else if (args.hasOwnProperty('offsetSpecialties') && args.hasOwnProperty('limitSpecialties')) {
      offset = args.offsetSpecialties
      limit = args.limitSpecialties
    }
    var data = await getQuerySchema({
      token: false,
      path: 'customer/specialties?offset=' + offset + '&limit=' + limit
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
  async getProductHome (query) {
    var args = Object.assign({}, query)
    var data = await postQuerySchema({
      token: false,
      data: args,
      path: 'customer/get-product'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
}
export default new HomeService()
