<template>
  <div class="order-cancel">
    <div class="row p-0 m-0">
      <button class="btn btn-primary mb-2" @click="refresh"><b-icon-arrow-repeat></b-icon-arrow-repeat> Refresh</button>
      <b-link :to="'/cart/order/' + element.id" :class="((index % 2 === 0) ? 'bg-lm ' : 'bg-ev ') + 'col-12 p-0 m-0 py-3 bg-lm text-dark'" v-for="(element, index) in dataCancelHistory" :key="index">
        <div class="row p-0 m-0 align-items-center">
          <div class="col-md">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="col-md">
            <span>{{ element.order_code }}</span>
          </div>
          <div class="col-md">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0" v-for="(orderDetail, i) in element.order_detail" :key="i">
                <div class="image-history-order" :style="{backgroundImage: 'url(' + orderDetail.product_id.images[0] + ')'}"></div>
              </div>
            </div>
          </div>
          <div class="col-md">
            <span v-for="(od, idx) in element.order_detail" :key="idx">
              <span v-if="idx === 0">
                {{ od.shop_id.firstname }} {{ od.shop_id.lastname }}
              </span>
            </span>
          </div>
          <div class="col-md">{{ element.quantity }} sản phẩm</div>
          <div class="col-md">
            <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.total_bill)}}</span>
          </div>
          <div class="col-md">
            <span>{{ element.created_at }}</span>
          </div>
        </div>
      </b-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataCancelHistory'
  ],
  name: 'OrderCancel',
  data () {
    return {
      //
    }
  },
  methods: {
    refresh () {
      this.$parent.orderHistory(3)
    }
  }
}
</script>

<style>
</style>
