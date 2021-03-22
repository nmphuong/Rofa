import AuthService from '../services/auth.service'

const user = localStorage.getItem('user')
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async login ({ commit }, user) {
      return AuthService.login(user)
    }
  }
}
