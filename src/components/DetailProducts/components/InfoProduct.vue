<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12 py-2">
        <span class="h5 font-weight-bold">{{ dataProduct.name }}</span>
      </div>
      <div class="col-12 py-2">
        <span v-if="this.resRate !== 0">
          <span class="text-danger text-decoration">{{ resRate.toFixed(1) }}</span>&nbsp;
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          &nbsp;|&nbsp;
          {{person}}&nbsp;đánh giá
        </span>
        <span v-else>
          Chưa có đánh giá
        </span>
      </div>
      <div class="col-12 py-2" style="background: #d3d3d3 !important">
        <span v-if="dataProduct.promotion_price !== null" :class="((dataProduct.promotion_price !== null) ? 'text-dash' : 'font-weight-bold')">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.price)}}</span>&nbsp;&nbsp;
        <span v-if="dataProduct.promotion_price !== null" class="text-danger h3">
          {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.promotion_price)}}
        </span>
        <span v-else class="text-danger h3">
          {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.price)}}
        </span>
        <span v-if="dataProduct.promotion_price !== null" class="discount bg-danger text-white px-2 py-1">{{ dataProduct.discount_code }}% giảm</span>
      </div>
      <div class="col-12 py-2">
        <div class="row p-0 m-0 align-items-center">
          <span>Số lượng:&nbsp;&nbsp;&nbsp;</span>
          <div class="d-flex">
            <button :disabled="amountProduct <= 1" @click="() => {this.amountProduct = Number(this.amountProduct) - 1}" :class="((amountProduct <= 1) ? 'disabled ' : '') + 'btn btn-amount-up'">-</button>
            <input @change="checkValidAmount" type="text" class="text-center border-0" v-model="amountProduct">
            <button :disabled="amountProduct >= Number(dataProduct.amount)" @click="() => {this.amountProduct = Number(this.amountProduct) + 1}" :class="((amountProduct >= Number(dataProduct.amount)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
          </div>
        </div>
      </div>
      <div class="col-12 py-2">
        <div class="row p-0 m-0">
          <button class="btn color-bg-main text-white w-auto">Mua ngay</button>
          &nbsp;
          <button class="btn color-bg-main text-white w-auto" @click="addToCart(dataProduct.slug)">Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div>
        <b-modal centered v-model="modalShow" hide-footer hide-header no-close-on-backdrop>
          <p class="mb-1 h1 color-main">
            <b-icon-check-circle-fill></b-icon-check-circle-fill>
          </p>
          <p class="m-0">
            Sản phẩm đã được thêm vào Giỏ hàng
          </p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataProduct',
    'dataListRate'
  ],
  name: 'InfoProduct',
  data () {
    return {
      resRate: 5,
      person: 0,
      amountProduct: 1,
      modalShow: false
    }
  },
  async mounted () {
    await this.totalRate()
  },
  methods: {
    totalRate () {
      var five = (this.dataListRate[0] * 5)
      var four = (this.dataListRate[1] * 4)
      var three = (this.dataListRate[2] * 3)
      var two = (this.dataListRate[3] * 2)
      var one = (this.dataListRate[4] * 1)
      this.person = this.dataListRate[0] + this.dataListRate[1] + this.dataListRate[2] + this.dataListRate[3] + this.dataListRate[4]
      this.resRate = (this.person === 0) ? 0 : (five + four + three + two + one) / (this.person)
    },
    checkValidAmount () {
      if (this.amountProduct < 1) {
        this.amountProduct = 1
      }
      if (this.amountProduct > this.dataProduct.amount) {
        this.amountProduct = this.dataProduct.amount
      }
    },
    async addToCart (value) {
      await this.$store.dispatch('cart/addCart', {slug: value, quantity: this.amountProduct}).then(async (result) => {
        this.modalShow = true
        setTimeout(() => {
          this.modalShow = false
        }, 2000)
      }).catch((e) => {
      })
    }
  }
}
</script>

<style>
.btn-amount-up,
.btn-amount-down {
  background: #d7d7d7;
  border-radius: 0;
}
.disabled {
  cursor: not-allowed;
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
</style>
