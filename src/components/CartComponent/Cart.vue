<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 main pb-5" v-if="dataCart.length !== 0">
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
                <th>Nhà cung cấp</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <!-- Info Product -->
              <tr v-for="(element, index) in dataCart" :key="index">
                <td class="vertical-middle text-danger">
                  <div class="d-flex align-items-center">
                    <b-icon-trash class="icon-del" @click="deleteProductCart(element.id)"></b-icon-trash>&nbsp;
                    <div class="checkmark custom-control custom-checkbox" style="width: 0px;">
                      <input v-bind:name="[element.id]" number type="checkbox" autocomplete="off" v-model="selected"  v-bind:class="['custom-control-input', element.id]"  :value="index + '-' + element.id + '-' + element.seller_id.id" v-bind:id="[element.id]">
                      <label class="custom-control-label" v-bind:for="[element.id]"></label>
                    </div>
                  </div>
                </td>
                <td class="d-flex justify-content-center">
                  <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                </td>
                <td class="text-name-prod">
                  <span class="text-name-product">{{ element.product_id.name }}</span>
                </td>
                <td>
                  <span>{{ element.seller_id.firstname }} {{ element.seller_id.lastname}}</span>
                </td>
                <td class="text-right">
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    &nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <p class="mb-1">
                      Số lượng có sẵn: {{ Number(element.product_id.amount - element.product_id.ammount_product_cart) }}
                    </p>
                  </div>
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
                    }" type="number" class="text-center border-0 input-quantity" v-model="element.quantity">
                    <button :disabled="element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)" @click="() => {
                      element.quantity = Number(element.quantity) + 1
                      updateQuantity(element.id, element.quantity)
                    }" :class="((element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
                  </div>
                </td>
                <td>
                  <span class="text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Total bill -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <span class="name total">Tổng cộng:</span><span class="total-price-bill text-danger h3 font-weight-bold">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
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
                <span @click="thankToanCheckShop" id="payment" class="btn color-bg-main text-white">Xác nhận đặt hàng</span>
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
                <div class="d-flex align-items-center">
                  <b-icon-trash class="icon-del" @click="deleteProductCart(element.id)"></b-icon-trash>&nbsp;
                  <div class="checkmark custom-control custom-checkbox" style="width: 0px;">
                    <input v-bind:name="[element.id]" number type="checkbox" autocomplete="off" v-model="selected"  v-bind:class="['custom-control-input', element.id]"  :value="index + '-' + element.id + '-' + element.seller_id.id" v-bind:id="[element.id]">
                    <label class="custom-control-label" v-bind:for="[element.id]"></label>
                  </div>
                </div>
              </div>
              <div class="col-11 p-0 m-0">
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
                      <div class="d-flex">
                        <p class="mb-1">
                          Số lượng có sẵn: {{ Number(element.product_id.amount - element.product_id.ammount_product_cart) }}
                        </p>
                      </div>
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
                        }" type="number" class="text-center border-0 input-quantity" v-model="element.quantity">
                        <button :disabled="element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)" @click="() => {
                          element.quantity = Number(element.quantity) + 1
                          updateQuantity(element.id, element.quantity)
                        }" :class="((element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
                      </div>
                      <span class="text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
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
                  <span class="name total">Tổng cộng:</span><span class="total-price-bill text-danger h3 font-weight-bold">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
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
                <button @click="thankToanCheckShop" id="payment" class="btn color-bg-main text-white">Xác nhận đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
        <!-- < 767 -->
        <div class="container-fluid" v-else>
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-2 p-0 m-0 d-flex align-items-center text-danger">
                <div class="d-flex align-items-center">
                  <b-icon-trash class="icon-del" @click="deleteProductCart(element.id)"></b-icon-trash>&nbsp;
                  <div class="checkmark custom-control custom-checkbox" style="width: 0px;">
                    <input v-bind:name="[element.id]" number type="checkbox" autocomplete="off" v-model="selected"  v-bind:class="['custom-control-input', element.id]"  :value="index + '-' + element.id + '-' + element.seller_id.id" v-bind:id="[element.id]">
                    <label class="custom-control-label" v-bind:for="[element.id]"></label>
                  </div>
                </div>
              </div>
              <div class="col-10 p-0 m-0">
                <div class="w-100">
                  <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                  <span class="text-name-product">{{ element.product_id.name }}</span>
                  <span class="text-name-product">Nhà cung cấp: {{ element.seller_id.firstname }} {{ element.seller_id.lastname}}</span>
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                  <div class="d-flex">
                    <p class="mb-1">
                      Số lượng có sẵn: {{ Number(element.product_id.amount - element.product_id.ammount_product_cart) }}
                    </p>
                  </div>
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
                    }" type="number" class="text-center border-0 input-quantity" v-model="element.quantity">
                    <button :disabled="element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)" @click="() => {
                      element.quantity = Number(element.quantity) + 1
                      updateQuantity(element.id, element.quantity)
                    }" :class="((element.quantity >= Number(element.product_id.amount - element.product_id.ammount_product_cart)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
                  </div>
                  <span class=" text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.total_price))}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Total bill -->
          <div class="row p-0 m-0 pb-3">
            <div class="col-12 p-0 m-0">
              <div class="d-flex w-100 justify-content-end">
                <span class="total bill font-weight-bold">
                  <span class="name total">Tổng cộng:</span><span class="total-price-bill text-danger h3 font-weight-bold">&nbsp;&nbsp;&nbsp;{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalBill)}}</span>
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
                <button @click="thankToanCheckShop" id="payment" class="btn color-bg-main text-white">Xác nhận đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <div class="col-12 p-0 m-0 main pb-5" v-if="dataCart.length === 0">
        <!-- name page -->
        <div class="row p-0 m-0 justify-content-center py-5">
          <span class="h4 font-weight-bold">
            Giỏ Hàng
          </span>
        </div>
        <div class="row p-0 m-0 justify-content-center no-data display-4 text-secondary">
          <p><b-icon-card-heading class="display-1"></b-icon-card-heading></p>
        </div>
        <div class="row p-0 m-0 justify-content-center no-data text-center text-secondary">
          <p>Bạn chưa có sản phẩm nào</p>
        </div>
      </div>
    </div>
    <div>
      <b-modal centered v-model="modalShowSelectOne" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn vui lòng chọn ít nhất 1 sản phẩm
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalShowSelectOtherShop" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn vui lòng chọn cùng 1 nhà cung cấp
        </p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      selected: [],
      dataCart: [],
      totalBill: 0,
      widthScreen: window.innerWidth,
      modalShowSelectOne: false,
      modalShowSelectOtherShop: false,
      dataComfirm: []
    }
  },
  async mounted () {
    await this.$parent.showLoading()
    await this.getCart()
    await this.$parent.hideLoading()
  },
  methods: {
    async thankToanCheckShop () {
      if (this.selected.length === 0) {
        this.modalShowSelectOne = true
        await setTimeout(() => {
          this.modalShowSelectOne = false
        }, 3000)
      } else {
        var idShop = this.selected[0].substring(this.selected[0].lastIndexOf('-') + 1, this.selected[0].length)
        var inValidSelect = false
        await this.selected.forEach(async (element, index) => {
          if (element.substring(element.lastIndexOf('-') + 1, element.length) !== idShop) {
            this.modalShowSelectOtherShop = true
            await setTimeout(() => {
              this.modalShowSelectOtherShop = false
            }, 3000)
            inValidSelect = true
          }
        })
        if (inValidSelect === false) {
          await this.$parent.showLoading()
          var idConfirm = []
          await this.selected.forEach(async (element) => {
            await this.dataCart.forEach((item) => {
              if (Number(element.substring(element.indexOf('-') + 1, element.lastIndexOf('-'))) === item.id) {
                idConfirm.push(item.id)
                this.dataComfirm.push(item)
              }
            })
          })
          await this.$store.dispatch('cart/confirmCart', idConfirm).then(async (result) => {
            await this.$emit('dataComfirmOrder', this.dataComfirm)
            this.$router.push('/cart/confirm')
            await this.$parent.hideLoading()
          }).catch(async (e) => {
            await this.$parent.hideLoading()
          })
        }
      }
    },
    async deleteProductCart (id) {
      if (confirm('Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng?')) {
        await this.$parent.showLoading()
        await this.$store.dispatch('cart/deleteProductCart', id).then(async (result) => {
          await this.getCart()
          await this.$parent.hideLoading()
        }).catch((e) => {
        })
      }
    },
    async updateQuantity (id, quantity) {
      await this.$store.dispatch('cart/updateQuantity', {id: id, quantity: quantity}).then(async (result) => {
        await this.getCart()
        this.totalBill = 0
        this.selected.forEach(element => {
          this.totalBill += Number(this.dataCart[element.substring(0, element.indexOf('-'))].total_price)
        })
      }).catch((e) => {
      })
    },
    async getCart () {
      await this.$store.dispatch('cart/getMyCart').then(async (result) => {
        this.dataCart = result.data
        await this.dataCart.forEach(async (element) => {
          if (Number(element.quantity) > (Number(element.product_id.amount) - Number(element.product_id.ammount_product_cart))) {
            await this.updateQuantity(element.id, (Number(element.product_id.amount) - Number(element.product_id.ammount_product_cart)))
          }
        })
        this.totalBill = 0
      }).catch((e) => {
      })
    }
  },
  watch: {
    selected () {
      this.totalBill = 0
      this.selected.forEach(element => {
        this.totalBill += Number(this.dataCart[element.substring(0, element.indexOf('-'))].total_price)
      })
    }
  },
  computed: {
    selectAll: {
      get: function () {
        this.$emit('selected_id', this.selected)
        return this.items ? this.selected.length === this.items.length : false
      },
      set: function (value) {
        var selecteds = []
        if (value) {
          this.items.forEach(function (item) {
            selecteds.push(item.id)
          })
        }
        this.selected = selecteds
        this.$emit('selected_id', this.selected)
      }
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
.modal-content {
  background-color: #0000007d;
  border: none;
  color: #fff;
  text-align: center;
  padding: 2em 0em;
}
</style>
