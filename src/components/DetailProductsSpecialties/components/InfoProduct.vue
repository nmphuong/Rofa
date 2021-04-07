<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12 py-2">
        <span class="h5 font-weight-bold">{{ dataProduct.name }}</span>
      </div>
      <!-- <div class="col-12 py-2">
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
      </div> -->
      <div class="col-12 py-2" style="background: #d3d3d3 !important">
        <span class="text-danger h3">
          Giá: {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.price)}}
        </span>
      </div>
      <div class="col-12 py-2">
        <span>
          Địa chỉ: {{dataProduct.location}}
        </span>
      </div>
      <!-- <div class="col-12 py-2">
        <div class="row p-0 m-0 align-items-center">
          <span>Số lượng:&nbsp;&nbsp;&nbsp;</span>
          <div class="d-flex">
            <button :disabled="amountProduct <= 1" @click="() => {this.amountProduct = Number(this.amountProduct) - 1}" :class="((amountProduct <= 1) ? 'disabled ' : '') + 'btn btn-amount-up'">-</button>
            <input @change="checkValidAmount" type="text" class="text-center border-0" v-model="amountProduct">
            <button :disabled="amountProduct >= Number(dataProduct.amount)" @click="() => {this.amountProduct = Number(this.amountProduct) + 1}" :class="((amountProduct >= Number(dataProduct.amount)) ? 'disabled ' : '') + 'btn btn-amount-down'">+</button>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-12 py-2">
        <div class="row p-0 m-0">
          <button class="btn color-bg-main text-white">Mua ngay</button>
          &nbsp;
          <button class="btn color-bg-main text-white">Thêm vào giỏ hàng</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataProduct'
  ],
  name: 'InfoProduct',
  data () {
    return {
      resRate: 5,
      person: 0,
      amountProduct: 1
    }
  },
  async mounted () {
    //
  },
  methods: {
    //
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
</style>
