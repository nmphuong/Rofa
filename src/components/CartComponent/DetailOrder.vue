<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 main pb-5">
        <!-- name page -->
        <div class="row p-0 m-0 justify-content-center py-5">
          <span class="h4 font-weight-bold">
            Đơn hàng của bạn
          </span>
        </div>
        <!-- Content -->
        <div class="container-fluid" v-if="widthScreen > 991">
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
                <th v-if="Number(dataCart[0].order_id.status_order) === 1">Đánh giá</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <!-- Info Product -->
              <tr v-for="(element, index) in dataCart" :key="index">
                <td class="d-flex justify-content-center">
                  <b-link :to="'/products/' + element.product_id.slug">
                    <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                  </b-link>
                </td>
                <td class="text-name-prod">
                  <b-link :to="'/products/' + element.product_id.slug">
                    <span class="text-name-product">{{ element.product_id.name }}</span>
                  </b-link>
                </td>
                <td>
                  <span>{{ element.shop_id.firstname }} {{ element.shop_id.lastname}}</span>
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
                  <span class="text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.price))}}</span>
                </td>
                <td>
                  <button v-if="Number(dataCart[0].order_id.status_order) === 1" class="btn color-bg-main text-white" @click="showModalAddRate(element.product_id.id)">Đánh giá sản phẩm</button>
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
                <b-link to="/cart/history" id="back" class="btn color-bg-main text-white">Trở lại</b-link>
              </div>
            </div>
          </div>
        </div>
        <!-- > 767 -->
        <div class="container-fluid" v-else-if="widthScreen > 767">
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0">
                <div class="w-100">
                  <div class="row p-0 m-0">
                    <b-link :to="'/products/' + element.product_id.slug">
                      <div class="col-3 img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                    </b-link>
                    <div class="col-9">
                      <b-link :to="'/products/' + element.product_id.slug">
                        <span class="text-name-product">{{ element.product_id.name }}</span>
                      </b-link>
                      <p class="text-name-product">Nhà cung cấp: {{ element.shop_id.firstname }} {{ element.shop_id.lastname}}</p>
                      <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                      <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                        {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                      </span>
                      <div>
                        <span>Số lượng: {{ element.quantity }}</span>
                      </div>
                      <span class="text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.price))}}</span>
                      <div><button v-if="Number(dataCart[0].order_id.status_order) === 1" class="btn color-bg-main text-white" @click="showModalAddRate(element.product_id.id)">Đánh giá sản phẩm</button></div>
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
                <b-link to="/cart/history" id="back" class="btn color-bg-main text-white">Trở lại</b-link>
              </div>
            </div>
          </div>
        </div>
        <!-- < 767 -->
        <div class="container-fluid" v-else>
          <!-- Table Product -->
          <div :class="(((index % 2) !== 0) ? 'l' : 'c') + ' p-3'" v-for="(element, index) in dataCart" :key="index">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0">
                <div class="w-100">
                  <b-link :to="'/products/' + element.product_id.slug">
                    <div class="img-product-cart" :style="{backgroundImage: 'url(' + element.product_id.images[0] + ')'}"></div>
                  </b-link>
                  <b-link :to="'/products/' + element.product_id.slug">
                    <span class="text-name-product">{{ element.product_id.name }}</span>
                  </b-link>
                  <p class="text-name-product">Nhà cung cấp: {{ element.shop_id.firstname }} {{ element.shop_id.lastname}}</p>
                  <span v-if="element.promotion_price !== null" :class="((element.product_id.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.price)}}</span>&nbsp;&nbsp;
                  <span v-if="element.product_id.promotion_price !== null" class="font-weight-bold">
                    {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.product_id.promotion_price)}}
                  </span>
                  <div>
                    <span>Số lượng: {{ element.quantity }}</span>
                  </div>
                  <span class=" text-danger font-weight-bold">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(element.price))}}</span>
                  <div><button v-if="Number(dataCart[0].order_id.status_order) === 1" class="btn color-bg-main text-white" @click="showModalAddRate(element.product_id.id)">Đánh giá sản phẩm</button></div>
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
                <b-link to="/cart/history" id="back" class="btn color-bg-main text-white">Trở lại</b-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal centered v-model="modalShow" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h5 text-white font-weight-bold">
          Mời bạn nhập đánh giá
        </p>
        <div class="row justify-content-center px-3">
          <div class="rateModal">
            <input @change="rateFunc(5)" type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input @change="rateFunc(4)" type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input @change="rateFunc(3)" type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input @change="rateFunc(2)" type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input @change="rateFunc(1)" type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
          <div class="col-12 p-0 m-0 py-4">
            <textarea placeholder="Nhập nội dung" name="" id="" rows="5" class="p-3 w-100 bg-none border-none text-white" v-model="content"></textarea>
          </div>
          <div class="m-0 p-0 col-12">
            <div class="row p-0 m-0">
              <div class="div-top col-12">
                <div class="row">
                  <div class="head col-12 p-0 pt-2 pb-2 d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <label for="upload-photo" id="addPhoto" class="color-main"><b-icon-plus></b-icon-plus> Add Photo</label>
                      <input type="file" @change="addPhotoChange" name="photo" id="upload-photo" style="opacity: 0;position: absolute;z-index: -1;" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-content col-12 p-0">
                <div class="row p-0 m-0">
                  <div :class="['p-0', 'p-2', (index === 0 ? 'col-12' : 'col-4')]" v-for="(image, index) in images" v-bind:key="index">
                    <div class="w-100 border-radius-5 border-1px-solid-d6d6d6 position-relative" style="height: auto;">
                      <img :src="image" class="w-100" style="height: auto" v-bind:alt="index"/>
                      <button class="position-absolute t-0-r-0-bg-none-bd-0-fs-1-5" type="button" @click="removeImages(index)"><b-icon-x></b-icon-x></button>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 p-0 m-0 py-2">
            <div class="row p-0 m-0 justify-content-center">
              <button class="btn color-bg-main text-white" @click="addRate">Đăng</button>
              &nbsp;
              <button class="btn color-bg-main text-white" @click="() => {this.modalShow = false}">Đóng</button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalAddRateOne" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn chỉ được đánh giá 1 lần
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalAddInvalid" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn vui lòng điền nội dung đánh giá
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalAddInvalidPoint" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn vui lòng chọn số điểm
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalAddRateSuccess" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 color-main">
          <b-icon-check-circle-fill></b-icon-check-circle-fill>
        </p>
        <p class="m-0">
          Đánh giá thành công xin cám ơn
        </p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: [
  ],
  name: 'DetailOrder',
  data () {
    return {
      dataCart: [],
      widthScreen: window.innerWidth,
      totalBill: 0,
      totalBillShip: 0,
      modalShow: false,
      point: 0,
      content: '',
      images: [],
      dataImg: null,
      id: null,
      modalAddRateOne: false,
      modalAddInvalid: false,
      modalAddInvalidPoint: false,
      modalAddRateSuccess: false,
      allowRate: true
    }
  },
  mounted () {
    this.getDetailOrder()
  },
  methods: {
    async rateFunc (value) {
      this.point = value
    },
    showModalAddRate (id) {
      this.modalShow = true
      this.id = id
    },
    showLoading () {
      this.loading = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
        color: '#10a7f7',
        width: 60,
        height: 60,
        zIndex: 99999999,
        backgroundColor: '#fff',
        loader: 'spinner',
        query: {}
      })
    },
    hideLoading () {
      this.loading.hide()
    },
    async getDetailOrder () {
      await this.showLoading()
      var id = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf('/') + 1, this.$router.history.current.path.length)
      await this.$store.dispatch('cart/detailOrder', id).then(async (result) => {
        this.dataCart = result.data
        this.totalBill = 0
        this.dataCart.forEach(element => {
          this.totalBill += Number(element.price)
        })
        this.totalBillShip = this.totalBill + 25000
        await this.hideLoading()
      }).catch(async (e) => {
        await this.hideLoading()
      })
    },
    addPhotoChange (e) {
      var files = e.target.files || e.dataTransfer.files
      this.filePhotos = files
      if (!files.length) {
        return
      }
      this.createImages(files)
    },
    async createImages (files) {
      var vm = this
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader()
        reader.onload = function (event) {
          const imageUrl = event.target.result
          vm.images.push(imageUrl)
        }
        let file = files[index]
        await reader.readAsDataURL(files[index])
        reader.onloadend = async () => {
          vm.dataImg = file
        }
      }
    },
    removeImages (index) {
      this.images.splice(index, 1)
    },
    async addRate () {
      var data = {}
      data.id = this.id
      if (this.content !== '') {
        if (this.point !== 0) {
          data.content = this.content
          data.vote = this.point
          if (this.dataImg.length !== 0) {
            data.content_image = [this.dataImg]
          }
          await this.$store.dispatch('products/addRate', data).then(async (result) => {
            if (result.status === false) {
              this.modalShow = false
              this.modalAddRateOne = true
              await setTimeout(() => {
                this.modalAddRateOne = false
              }, 3000)
            } else {
              this.modalShow = false
              this.modalAddRateSuccess = true
              await setTimeout(() => {
                this.modalAddRateSuccess = false
              }, 3000)
            }
          }).catch(async (e) => {
          })
        } else {
          this.modalAddInvalidPoint = true
          await setTimeout(() => {
            this.modalAddInvalidPoint = false
          }, 3000)
        }
      } else {
        this.modalAddInvalid = true
        await setTimeout(() => {
          this.modalAddInvalid = false
        }, 3000)
      }
    }
  }
}
</script>

<style>
.img-product-cart {
  width: 100px;
  height: 100px;
  background-position: center!important;
  background-size: contain!important;
  background-repeat: no-repeat!important;
}
.text-dash {
  text-decoration: line-through;
}
.modal-content {
  background-color: #0000007d;
  border: none;
  color: #fff;
  text-align: center;
  padding: 2em 0em;
}
.rateModal {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rateModal:not(:checked) > input {
  position:absolute;
  top:-9999px;
}
.rateModal:not(:checked) > label {
  float:right;
  width:1em;
  overflow:hidden;
  white-space:nowrap;
  cursor:pointer;
  font-size:40px;
  color:#ccc;
}
.rateModal:not(:checked) > label:before {
  content: '★ ';
}
.rateModal > input:checked ~ label {
  color: #ffc700;
}
.rateModal:not(:checked) > label:hover,
.rateModal:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rateModal > input:checked + label:hover,
.rateModal > input:checked + label:hover ~ label,
.rateModal > input:checked ~ label:hover,
.rateModal > input:checked ~ label:hover ~ label,
.rateModal > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
.bg-none {
  background: rgba(0, 0, 0, 0);
}
</style>
