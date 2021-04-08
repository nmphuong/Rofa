import { getQuerySchema } from '../api/api.call'

class SearchService {
  async getSearch (query) {
    var args = Object.assign({}, query)
    var offset = ''
    var limit = ''
    var type = ''
    var location = ''
    var min = ''
    var max = ''
    if (args.hasOwnProperty('offset') && args.hasOwnProperty('limit')) {
      offset = '?offset=' + args.offset
      limit = '&limit=' + args.limit
    }
    if (args.hasOwnProperty('type') && args.type !== null) {
      type = '&category_id=' + args.type
    }
    if (args.hasOwnProperty('location') && args.location !== null) {
      location = '&location=' + args.location
    }
    if (args.hasOwnProperty('min') && args.min !== null) {
      min = '&min=' + args.min
    }
    if (args.hasOwnProperty('max') && args.max !== null) {
      max = '&max=' + args.max
    }
    var data = await getQuerySchema({
      token: false,
      path: 'customer/search/result' + offset + limit + type + location + min + max
    })
    if (data instanceof Error) {
      return data
    } else {
      return data.data
    }
  }
}
export default new SearchService()
