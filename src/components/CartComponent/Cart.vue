<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 main pb-5">
        <!-- name page -->
        <div class="row p-0 m-0 justify-content-center py-5">
          <span class="h4 font-weight-bold">
            Giỏ Hàng
          </span>
        </div>
        <!-- Content -->
        <div class="container-fluid" v-if="widthScreen > 991">
          <!-- Table Product -->
          <table class="table">
            <thead>
              <tr class="text-center">
                <th></th>
                <th>Hình ảnh</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <!-- Info Product -->
              <tr v-for="(element, index) in dataCart" :key="index">
                <td class="vertical-middle text-danger">
                  <b-icon-trash class="icon-del" @click="deleteProductCart(element.id)"></b-icon-trash>
                </td>
                <td class="d-flex justify-content-center">
                  <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                </td>
                <td class="text-name-prod">
                  <span class="text-name-product">{{ element.product_id.name }}</span>
                </td>
                <td>
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <button :disabled="element.quantity <= 1" @click="() => {
                      element.quantity = Number(element.quantity) - 1
                      updateQuantity(element.id, element.quantity)
                    }" :class="((element.quantity <= 1) ? 'disabled ' : '') + 'btn btn-amount-up'">-</button>
                    <input @change="() => {
                      if (element.quantity < 1) {
                        element.quantity = 1
                      }
                      if (element.quantity > (element.product_id.amount - element.product_id.ammount_product_cart)) {
                        element.quantity = element.product_id.amount - element.product_id.ammount_product_cart
                      }
                      updateQuantity(element.id, element.quantity)
                    }" type="text" class="text-center border-0 input-quantity" v-model="element.quantity">
                    <button :disabled="element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)" @click="() => {
                      element.quantity = Number(element.quantity) + 1
                      updateQuantity(element.id, element.quantity)
                    }" :class="((element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
                  </div>
                </td>
                <td>
                  <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Total bill -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <span class="name total">Tổng cộng:</span><span class="total-price-bill">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
                </span>
              </div>
            </div>
          </div>
          <!-- Back and payment -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-center">
                <b-link to="/" id="back" class="btn color-bg-main text-white">Trang chủ</b-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button id="payment" class="btn color-bg-main text-white">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
        <!-- > 767 -->
        <div class="container-fluid" v-else-if="widthScreen > 767">
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-1 p-0 m-0 d-flex align-items-center text-danger">
                <b-icon-trash class="icon-del" @click="deleteProductCart(element.id)"></b-icon-trash>
              </div>
              <div class="col-11 p-0 m-0">
                <div class="w-100">
                  <div class="row p-0 m-0">
                    <div class="col-3 img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                    <div class="col-9">
                      <span class="text-name-product">{{ element.product_id.name }}</span>
                      <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                      <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                        {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                      </span>
                      <div>
                        <button :disabled="element.quantity <= 1" @click="() => {
                          element.quantity = Number(element.quantity) - 1
                          updateQuantity(element.id, element.quantity)
                        }" :class="((element.quantity <= 1) ? 'disabled ' : '') + 'btn btn-amount-up'">-</button>
                        <input @change="() => {
                          if (element.quantity < 1) {
                            element.quantity = 1
                          }
                          if (element.quantity > (element.product_id.amount - element.product_id.ammount_product_cart)) {
                            element.quantity = element.product_id.amount - element.product_id.ammount_product_cart
                          }
                          updateQuantity(element.id, element.quantity)
                        }" type="text" class="text-center border-0 input-quantity" v-model="element.quantity">
                        <button :disabled="element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)" @click="() => {
                          element.quantity = Number(element.quantity) + 1
                          updateQuantity(element.id, element.quantity)
                        }" :class="((element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
                      </div>
                      <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Total bill -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <span class="name total">Tổng cộng:</span><span class="total-price-bill">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
                </span>
              </div>
            </div>
          </div>
          <!-- Back and payment -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-center">
                <b-link to="/" id="back" class="btn color-bg-main text-white">Trang chủ</b-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button id="payment" class="btn color-bg-main text-white">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
        <!-- < 767 -->
        <div class="container-fluid" v-else>
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-1 p-0 m-0 d-flex align-items-center text-danger">
                <b-icon-trash class="icon-del" @click="deleteProductCart(element.id)"></b-icon-trash>
              </div>
              <div class="col-11 p-0 m-0">
                <div class="w-100">
                  <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                  <span class="text-name-product">{{ element.product_id.name }}</span>
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                  <div>
                    <button :disabled="element.quantity <= 1" @click="() => {
                      element.quantity = Number(element.quantity) - 1
                      updateQuantity(element.id, element.quantity)
                    }" :class="((element.quantity <= 1) ? 'disabled ' : '') + 'btn btn-amount-up'">-</button>
                    <input @change="() => {
                      if (element.quantity < 1) {
                        element.quantity = 1
                      }
                      if (element.quantity > (element.product_id.amount - element.product_id.ammount_product_cart)) {
                        element.quantity = element.product_id.amount - element.product_id.ammount_product_cart
                      }
                      updateQuantity(element.id, element.quantity)
                    }" type="text" class="text-center border-0 input-quantity" v-model="element.quantity">
                    <button :disabled="element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)" @click="() => {
                      element.quantity = Number(element.quantity) + 1
                      updateQuantity(element.id, element.quantity)
                    }" :class="((element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
                  </div>
                  <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Total bill -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <span class="name total">Tổng cộng:</span><span class="total-price-bill">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
                </span>
              </div>
            </div>
          </div>
          <!-- Back and payment -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-center">
                <b-link to="/" id="back" class="btn color-bg-main text-white">Trang chủ</b-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button id="payment" class="btn color-bg-main text-white">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      dataCart: [],
      totalBill: 0,
      widthScreen: window.innerWidth
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    async deleteProductCart (id) {
      if (confirm('Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng?')) {
        await this.$store.dispatch('cart/deleteProductCart', id).then(async (result) => {
          this.getCart()
        }).catch((e) => {
        })
      }
    },
    async updateQuantity (id, quantity) {
      await this.$store.dispatch('cart/updateQuantity', {id: id, quantity: quantity}).then(async (result) => {
        this.getCart()
      }).catch((e) => {
      })
    },
    async getCart () {
      await this.$store.dispatch('cart/getMyCart').then(async (result) => {
        this.dataCart = result.data
        this.totalBill = 0
        this.dataCart.forEach((element) => {
          this.totalBill += Number(element.total_price)
        })
      }).catch((e) => {
      })
    }
  }
}
</script>

<style>
.vertical-middle {
  vertical-align: middle !important;
}
.text-name-product {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-name-prod {
  max-width: 50px;
}
.img-product-cart {
  width: 100px;
  height: 100px;
  background-position: center!important;
  background-size: contain!important;
  background-repeat: no-repeat!important;
}
.icon-del {
  cursor: pointer;
}
.text-dash {
  text-decoration: line-through;
}
.l {
  background: #c8c8c8;
}
.c {
  background: #dbdbdb;
}
.input-quantity {
    width: 100px;
}
</style>
