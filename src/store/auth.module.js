import AuthService from '../services/auth.service'

const user = localStorage.getItem('user')
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async loginCustomer ({ commit }, user) {
      return AuthService.loginCustomer(user)
    },
    async loginSeller ({ commit }, user) {
      return AuthService.loginSeller(user)
    },
    async register ({ commit }, user) {
      return AuthService.register(user)
    }
  }
}
