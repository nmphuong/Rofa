<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 main pb-5">
        <!-- name page -->
        <div class="row p-0 m-0 justify-content-center py-5">
          <span class="h4 font-weight-bold">
            Xác nhận đơn hàng
          </span>
        </div>
        <!-- Content -->
        <div class="container-fluid" v-if="widthScreen > 991">
          <div class="row p-0 m-0">
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="fullname" placeholder="Full name">
            </div>
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="phone" placeholder="Số điện thoại">
            </div>
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="location" placeholder="Địa chỉ">
            </div>
            <div class="pb-2 col-md-6">
              <input type="email" class="form-control" v-model="email" placeholder="Email">
            </div>
          </div>
          <!-- Table Product -->
          <table class="table">
            <thead>
              <tr class="text-center">
                <th>Hình ảnh</th>
                <th>Sản phẩm</th>
                <th>Nhà cung cấp</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <!-- Info Product -->
              <tr v-for="(element, index) in dataCart" :key="index">
                <td class="d-flex justify-content-center">
                  <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                </td>
                <td class="text-name-prod">
                  <span class="text-name-product">{{ element.product_id.name }}</span>
                </td>
                <td>
                  <span>{{ element.seller_id.firstname }} {{ element.seller_id.lastname}}</span>
                </td>
                <td class="text-center">
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    &nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span>{{ element.quantity }}</span>
                  </div>
                </td>
                <td>
                  <span class="text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row p-0 m-0">
            <div class="pb-2 col-md-12 text-right">
              <span>Thánh toán tiền mặt khi nhận hàng</span>
            </div>
          </div>
          <!-- Total bill -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <p class="mb-0 text-right">
                    <span class="name total">Tiền hàng:</span><span class="total-price-bill text-danger">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
                  </p>
                  <p class="mb-0 text-right">
                    <span class="name total">Tiền giao hàng:</span><span class="total-price-bill text-danger">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(25000)}}</span>
                  </p>
                  <p class="mb-0 text-right">
                    <span class="name total">Tổng cộng:</span><span class="total-price-bill text-danger h3 font-weight-bold">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBillShip)}}</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <!-- Back and payment -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-center">
                <b-link to="/cart" id="back" class="btn color-bg-main text-white">Trở lại</b-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span @click="ConfirmOrder" id="payment" class="btn color-bg-main text-white">Thanh toán</span>
              </div>
            </div>
          </div>
        </div>
        <!-- > 767 -->
        <div class="container-fluid" v-else-if="widthScreen > 767">
          <div class="row p-0 m-0">
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="fullname" placeholder="Full name">
            </div>
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="phone" placeholder="Số điện thoại">
            </div>
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="location" placeholder="Địa chỉ">
            </div>
            <div class="pb-2 col-md-6">
              <input type="email" class="form-control" v-model="email" placeholder="Email">
            </div>
          </div>
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0">
                <div class="w-100">
                  <div class="row p-0 m-0">
                    <div class="col-3 img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                    <div class="col-9">
                      <span class="text-name-product">{{ element.product_id.name }}</span>
                      <span class="text-name-product">Nhà cung cấp: {{ element.seller_id.firstname }} {{ element.seller_id.lastname}}</span>
                      <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                      <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                        {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                      </span>
                      <div>
                        <span>{{ element.quantity }}</span>
                      </div>
                      <span class="text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Total bill -->
          <div class="row p-0 m-0">
            <div class="pb-2 col-md-12 text-left">
              <span>Thánh toán tiền mặt khi nhận hàng</span>
            </div>
          </div>
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <p class="mb-0 text-right">
                    <span class="name total">Tiền hàng:</span><span class="total-price-bill text-danger">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
                  </p>
                  <p class="mb-0 text-right">
                    <span class="name total">Tiền giao hàng:</span><span class="total-price-bill text-danger">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(25000)}}</span>
                  </p>
                  <p class="mb-0 text-right">
                    <span class="name total">Tổng cộng:</span><span class="total-price-bill text-danger h3 font-weight-bold">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBillShip)}}</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <!-- Back and payment -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-center">
                <b-link to="/cart" id="back" class="btn color-bg-main text-white">Trở lại</b-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button @click="ConfirmOrder" id="payment" class="btn color-bg-main text-white">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
        <!-- < 767 -->
        <div class="container-fluid" v-else>
          <div class="row p-0 m-0">
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="fullname" placeholder="Full name">
            </div>
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="phone" placeholder="Số điện thoại">
            </div>
            <div class="pb-2 col-md-6">
              <input type="text" class="form-control" v-model="location" placeholder="Địa chỉ">
            </div>
            <div class="pb-2 col-md-6">
              <input type="email" class="form-control" v-model="email" placeholder="Email">
            </div>
          </div>
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0">
                <div class="w-100">
                  <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                  <span class="text-name-product">{{ element.product_id.name }}</span>
                  <span class="text-name-product">Nhà cung cấp: {{ element.seller_id.firstname }} {{ element.seller_id.lastname}}</span>
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                  <div>
                    <span>{{ element.quantity }}</span>
                  </div>
                  <span class=" text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Total bill -->
          <div class="row p-0 m-0">
            <div class="pb-2 col-md-12 text-right">
              <span>Thánh toán tiền mặt khi nhận hàng</span>
            </div>
          </div>
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <p class="mb-0 text-right">
                    <span class="name total">Tiền hàng:</span><span class="total-price-bill text-danger">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
                  </p>
                  <p class="mb-0 text-right">
                    <span class="name total">Tiền giao hàng:</span><span class="total-price-bill text-danger">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(25000)}}</span>
                  </p>
                  <p class="mb-0 text-right">
                    <span class="name total">Tổng cộng:</span><span class="total-price-bill text-danger h3 font-weight-bold">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBillShip)}}</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <!-- Back and payment -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-center">
                <b-link to="/cart" id="back" class="btn color-bg-main text-white">Trở lại</b-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button @click="ConfirmOrder" id="payment" class="btn color-bg-main text-white">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal centered v-model="modalShowValid" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn vui lòng điền đầy đủ thông tin
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalAddCartSuccess" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 color-main">
          <b-icon-check-circle-fill></b-icon-check-circle-fill>
        </p>
        <p class="m-0">
          Bạn đã đặt hàng thành công!
          Xin cảm ơn
        </p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataCart',
    'dataUser'
  ],
  name: 'ComfirmOrder',
  data () {
    return {
      totalBill: 0,
      dataC: this.dataCart,
      widthScreen: window.innerWidth,
      totalBillShip: 0,
      fullname: '',
      phone: '',
      location: '',
      email: '',
      modalShowValid: false,
      modalAddCartSuccess: false
    }
  },
  mounted () {
    this.totalBill = 0
    this.dataC.forEach(element => {
      this.totalBill += Number(element.total_price)
    })
    this.totalBillShip = this.totalBill + 25000
  },
  methods: {
    async ConfirmOrder () {
      if (this.fullname === undefined || this.fullname === null || this.fullname === '' || this.phone === undefined || this.phone === null || this.phone === '' || this.location === undefined || this.location === null || this.location === '' || this.email === undefined || this.email === null || this.email === '') {
        this.modalShowValid = true
        await setTimeout(() => {
          this.modalShowValid = false
        }, 3000)
      } else {
        await this.$parent.showLoading()
        var dataQuery = {}
        dataQuery.total_bill = this.totalBill.toString()
        dataQuery.fullname = this.fullname
        dataQuery.type_ship_id = '1'
        dataQuery.ship_address = this.location
        dataQuery.phone = this.phone
        dataQuery.email = this.email
        await this.$store.dispatch('cart/confirmOrderPayment', dataQuery).then(async (result) => {
          await this.$parent.hideLoading()
          this.modalAddCartSuccess = true
          await setTimeout(() => {
            this.modalAddCartSuccess = false
            this.$router.push('/cart')
          }, 3000)
        }).catch((e) => {
        })
      }
    }
  }
}
</script>

<style>
</style>
