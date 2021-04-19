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
      path:
        'customer/get-same-product-of-seller/' + id + '?offset=0&limit=6&type=4'
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
  async addRate (dataRate) {
    var keys = Object.keys(dataRate)
    let formData = new FormData()
    keys.forEach(key => {
      if (key === 'content_image') {
        if (dataRate[key].length !== 0) {
          for (var i = 0; i < dataRate[key].length; i++) {
            formData.append(key + '[' + i + ']', dataRate[key][i])
          }
        }
      } else {
        formData.append(key, dataRate[key])
      }
    })
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: formData,
      path: 'customer/add-rate-product/' + dataRate.id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getProductSeller () {
    var data = await getQuerySchema({
      tokenSeller: true,
      path: 'sellers/get-product-of-seller?offset=0&limit=50'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
}
export default new ProductsService()
