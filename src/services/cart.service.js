import { getQuerySchema, postQuerySchema } from '../api/api.call'

class CartService {
  async addCart (query) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: {
        quantity: query.quantity
      },
      path: 'customer/add-shopping-cart/' + query.slug
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async getMyCart () {
    var data = await getQuerySchema({
      tokenCustomer: true,
      path: 'customer/get-shopping-cart'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async deleteProductCart (id) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: {
        cartID: [id]
      },
      path: 'customer/del-shopping-cart'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async updateQuantity (query) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: {
        quantity: query.quantity
      },
      path: 'customer/update-shopping-cart/' + query.id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async confirmCart (id) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: {
        cartID: id
      },
      path: 'customer/confirm-cart'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async confirmOrderPayment (dataOrder) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: dataOrder,
      path: 'customer/order-payment'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async historyOrder (id) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: {
        type: id
      },
      path: 'customer/history-order'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async cancelOrder (query) {
    var data = await postQuerySchema({
      tokenCustomer: true,
      data: {
        content: query.content
      },
      path: 'customer/cancel-order/' + query.id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
  async detailOrder (id) {
    var data = await getQuerySchema({
      tokenCustomer: true,
      path: 'customer/detail-order/' + id
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
}
export default new CartService()
