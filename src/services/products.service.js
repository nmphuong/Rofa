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
  async getRateAmount (id) {
    var data = await getQuerySchema({
      token: false,
      path: 'customer/list-rate/' + id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
}
export default new ProductsService()
