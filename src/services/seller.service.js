import { postDataSchema } from '../api/api.call'

class SellerService {
  async updateAccount (user) {
    var keys = Object.keys(user) // Cái này là để lấy key của object ví dụ như: {a: 1, b: 2} thì keys là [a, b]
    let formData = new FormData() // Khởi tạo cái form data để gửi dữ liệu kèm với data như hình video các kiểu cho backend ngen
    keys.forEach(key => {
      formData.append(key, user[key]) // Append key và value vào form data để gửi cho backend
    })
    var data = await postDataSchema({ // Gọi tới hàm postDataSchema ở file api.call
      tokenSeller: true, // Token của seller
      data: formData, // Data gửi đi
      path: 'sellers/update-account' // Đường dẫn
    })
    if (data instanceof Error) {
      return data // Trả về lỗi
    } else {
      return data // Trả về success
    }
  }
}
export default new SellerService()
