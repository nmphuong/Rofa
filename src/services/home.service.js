import { getQuerySchema } from '../api/api.call'

class HomeService {
  async getBanners () {
    var data = await getQuerySchema({
      token: false,
      path: 'customer/get-banner'
    })
    if (data instanceof Error) {
      return data
    } else {
      return data
    }
  }
}
export default new HomeService()
