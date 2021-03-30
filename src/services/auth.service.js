import { getQuerySchema, postQuerySchema } from '../api/api.call'

class AuthService {
  async loginCustomer (user) {
    var data = await postQuerySchema({
      token: false,
      data: {
        username: user.username,
        email: user.username,
        phone: user.username,
        passwords: user.passwords
      },
      path: 'customer/login-account'
    })
    if (data instanceof Error) {
      return data
    } else {
      var Oaj0mZteIDsw3vgVxYCbcustomers = '{"token":"' + data.data.token + '", "loging":' + true + '}'
      var seller = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
      if (seller !== null) {
        var Oaj0mZteIDsw3vgVxYCbsellers = '{"token":"' + seller.token + '", "loging":' + false + '}'
        localStorage.setItem('Oaj0mZteIDsw3vgVxYCbsellers', Oaj0mZteIDsw3vgVxYCbsellers)
      }
      return localStorage.setItem('Oaj0mZteIDsw3vgVxYCbcustomers', Oaj0mZteIDsw3vgVxYCbcustomers)
    }
  }
  async loginSeller (user) {
    var data = await postQuerySchema({
      token: false,
      data: {
        username: user.username,
        email: user.username,
        phone: user.username,
        passwords: user.passwords
      },
      path: 'sellers/login-account'
    })
    if (data instanceof Error) {
      return data
    } else {
      console.log(data)
      var Oaj0mZteIDsw3vgVxYCbsellers = '{"token":"' + data.data.data.token + '", "loging":' + true + '}'
      var customer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
      if (customer !== null) {
        var Oaj0mZteIDsw3vgVxYCbcustomers = '{"token":"' + customer.token + '", "loging":' + false + '}'
        localStorage.setItem('Oaj0mZteIDsw3vgVxYCbcustomers', Oaj0mZteIDsw3vgVxYCbcustomers)
      }
      return localStorage.setItem('Oaj0mZteIDsw3vgVxYCbsellers', Oaj0mZteIDsw3vgVxYCbsellers)
    }
  }
  async register (user) {
    var data = await postQuerySchema({
      token: false,
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        passwords: user.passwords
      },
      path: 'customer/create-account'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
  async getProfileCustomer () {
    var data = await getQuerySchema({
      tokenCustomer: true,
      path: 'customer/get-info-account'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
  async getProfileSellers () {
    var data = await getQuerySchema({
      tokenSeller: true,
      path: 'sellers/get-info-account'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
}
export default new AuthService()
