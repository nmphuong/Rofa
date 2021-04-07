import { getQuerySchema, postQuerySchema } from '../api/api.call'

class ProductsService {
  async getDetailProducts (id) {
    var data = await postQuerySchema({
      token: false,
      path: 'customer/detail-product/' + id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getDetailProductsSpecialties (id) {
    var data = await getQuerySchema({
      token: false,
      path: 'customer/detail-regional-specialties/' + id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getListRate (id) {
    var data = await getQuerySchema({
      token: false,
      path: 'customer/list-star-vote/' + id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getRateAmount (query) {
    var args = Object.assign({}, query)
    var offset = ''
    var limit = ''
    if (args.hasOwnProperty('offset') && args.hasOwnProperty('limit')) {
      offset = '?offset=' + args.offset
      limit = '&limit=' + args.limit
    }
    var data = await getQuerySchema({
      token: false,
      path: 'customer/list-rate/' + args.id + offset + limit
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getSameProduct (id) {
    var data = await getQuerySchema({
      token: false,
      path: 'customer/get-same-product-of-seller/' + id + '?offset=0&limit=6&type=4'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getDatailNews (id) {
    var data = await postQuerySchema({
      token: false,
      path: 'customer/get-detail-news/' + id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
}
export default new ProductsService()
