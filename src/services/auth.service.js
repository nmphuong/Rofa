import { postQuerySchema } from '../api/api.call'

class AuthService {
  async login (user) {
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
      return localStorage.setItem('user', data.data.token)
    }
  }
}
export default new AuthService()
