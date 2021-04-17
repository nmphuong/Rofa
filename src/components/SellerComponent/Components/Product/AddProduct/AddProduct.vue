<template>
  <div class="right">
    <div class="right__content">
      <div class="right__title"></div>
      <p class="right__desc">Thêm sản phẩm</p>
      <div class="right__formWrapper">
        <div class="row p-0 m-0">
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Danh mục sản phẩm
            </p>
            <b-form-select class="w-100" v-model="categorySelected" :options="categoryOptions"></b-form-select>
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              SKU
            </p>
            <input type="text" v-model="sku" class="form-control">
          </div>
          <div class="col-md-12 pb-2">
            <p class="mb-1">Tên sản phẩm *</p>
            <input maxlength="250" type="text" v-model="nameProduct" class="form-control">
            <div class="d-flex justify-content-end">
              <span>{{nameProduct.length}}/250</span>
            </div>
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Giá
            </p>
            <input @change="changeDiscount" type="text" v-model="price" class="form-control">
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Số lượng
            </p>
            <input type="text" v-model="amount" class="form-control">
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Giảm giá
            </p>
            <input @change="changeDiscount" type="text" v-model="discount" class="form-control">
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Giá sau khi giảm
            </p>
            <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pricePromotion)}}</span>
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Xuất xứ
            </p>
            <input type="text" v-model="made" class="form-control">
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Địa chỉ
            </p>
            <b-form-select class="form-control" v-model="locationSelected" :options="locationOptions"></b-form-select>
          </div>
          <div class="col-md-6 pb-2">
            <p class="mb-1">
              Địa chỉ chi tiết
            </p>
            <input type="text" v-model="fulladdress" class="form-control">
          </div>
          <div class="col-md-12 pb-2">
            <p class="mb-1">
              Mô tả ngắn
            </p>
            <vue-editor v-model="short_des"></vue-editor>
          </div>
          <div class="col-md-12 pb-2">
            <p class="mb-1">
              Mô tả đầy đủ
            </p>
            <vue-editor v-model="long_des"></vue-editor>
          </div>
          <div class="col-md-12 pb-2">
            <p class="mb-1">
              Ảnh
            </p>
            <div class="col-12">
              <div class="row p-0 m-0">
                <div class="div-top col-12">
                  <div class="row">
                    <div class="head col-12 p-0 pt-2 pb-2 d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <label for="upload-photo" id="addPhoto" class="color-main"><b-icon-plus></b-icon-plus> Add Photo</label>
                        <input type="file" multiple @change="addPhotoChange" name="photo" id="upload-photo" style="opacity: 0;position: absolute;z-index: -1;" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div-content col-12 p-0">
                  <div class="row p-0 m-0">
                    <div :class="['p-0', 'p-2', 'col-sm-4']" v-for="(image, index) in images" v-bind:key="index">
                      <div class="w-100 border-radius-5 border-1px-solid-d6d6d6 position-relative" style="height: auto;">
                        <img :src="image" class="w-100" style="height: 200px;" v-bind:alt="index"/>
                        <button class="position-absolute color-main t-0-r-0-bg-none-bd-0-fs-1-5" type="button" @click="removeImages(index)"><b-icon-x></b-icon-x></button>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 pb-2">
            <button class="btn color-bg-main text-white" @click="pushblicProduct">Đăng sản phẩm</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal centered v-model="modalShow" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          {{ messageError }}
        </p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import city from '../../../../../json/city.json'
export default {
  name: 'AddProduct',
  data () {
    return {
      categorySelected: 9,
      categoryOptions: [
        { value: 9, text: 'Đặc sản vùng miền' },
        { value: 4, text: 'Rau sạch' },
        { value: 7, text: 'Nông sản' },
        { value: 1, text: 'Thủy - Hải sản' },
        { value: 5, text: 'Vật tư thức ăn' }
      ],
      nameProduct: '',
      sku: '',
      price: 0,
      amount: 0,
      location: '',
      made: '',
      short_des: '',
      long_des: '',
      discount: 0,
      pricePromotion: 0,
      locationSelected: null,
      locationOptions: [
        {value: null, text: 'Tất cả'}
      ],
      dataCity: city,
      images: [],
      dataImg: [],
      fulladdress: '',
      messageError: '',
      modalShow: false
    }
  },
  async mounted () {
    await this.dataCity.sort((a, b) => {
      return a.city.localeCompare(b.city)
    })
    await this.dataCity.forEach((element, index) => {
      this.locationOptions.push(
        {value: element.city, text: element.city}
      )
    })
  },
  methods: {
    changeDiscount () {
      if (Number(this.discount) !== 0) {
        this.pricePromotion = Number(this.price) * (100 - Number(this.discount)) / 100
      }
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
          vm.dataImg.push(file)
        }
      }
    },
    removeImages (index) {
      this.images.splice(index, 1)
    },
    async pushblicProduct () {
      if (this.nameProduct !== null && this !== '') {
        if (this.sku !== null && this !== '') {
          if (this.price !== null && this !== '') {
            if (this.amount !== null && this !== '') {
              if (this.location !== null && this !== '') {
                if (this.location !== null && this !== '') {
                  if (this.location !== null && this !== '') {
                    if (this.location !== null && this !== '') {
                      if (this.location !== null && this !== '') {
                        //
                      } else {
                        this.messageError = 'Vui lòng nhập tên sản phẩm'
                        this.modalShow = true
                        await setTimeout(() => {
                          this.modalShow = false
                        }, 2000)
                      }
                    } else {
                      this.messageError = 'Vui lòng nhập tên sản phẩm'
                      this.modalShow = true
                      await setTimeout(() => {
                        this.modalShow = false
                      }, 2000)
                    }
                  } else {
                    this.messageError = 'Vui lòng nhập tên sản phẩm'
                    this.modalShow = true
                    await setTimeout(() => {
                      this.modalShow = false
                    }, 2000)
                  }
                } else {
                  this.messageError = 'Vui lòng nhập tên sản phẩm'
                  this.modalShow = true
                  await setTimeout(() => {
                    this.modalShow = false
                  }, 2000)
                }
              } else {
                this.messageError = 'Vui lòng nhập tên sản phẩm'
                this.modalShow = true
                await setTimeout(() => {
                  this.modalShow = false
                }, 2000)
              }
            } else {
              this.messageError = 'Vui lòng nhập tên sản phẩm'
              this.modalShow = true
              await setTimeout(() => {
                this.modalShow = false
              }, 2000)
            }
          } else {
            this.messageError = 'Vui lòng nhập tên sản phẩm'
            this.modalShow = true
            await setTimeout(() => {
              this.modalShow = false
            }, 2000)
          }
        } else {
          this.messageError = 'Vui lòng nhập tên sản phẩm'
          this.modalShow = true
          await setTimeout(() => {
            this.modalShow = false
          }, 2000)
        }
      } else {
        this.messageError = 'Vui lòng nhập tên sản phẩm'
        this.modalShow = true
        await setTimeout(() => {
          this.modalShow = false
        }, 2000)
      }
      var dataProduct = {}
      dataProduct.category_id = this.categorySelected
      dataProduct.name = this.nameProduct
      dataProduct.sku = this.sku
      dataProduct.price = this.price
      dataProduct.amount = this.amount
      dataProduct.location = this.location
      dataProduct.made = this.made
      dataProduct.short_desc = this.short_des
      dataProduct.long_desc = this.long_des
      dataProduct.discount_code = this.discount
      dataProduct.promotion_price = this.pricePromotion
      dataProduct.location = this.locationSelected
      dataProduct.images = this.dataImg
      dataProduct.detail_location = this.fulladdress
      await this.$store.dispatch('products/addProduct', dataProduct).then(async (result) => {
        console.log(result)
      }).catch((e) => {
      })
    }
  },
  components: {
    VueEditor
  }
}
</script>

<style>
.t-0-r-0-bg-none-bd-0-fs-1-5 {
  top: 0;
  right: 0;
  font-size: 1.5em;
  background: none;
  font-weight: bold;
}
</style>
