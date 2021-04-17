<template>
  <div class="order-success">
    <vue-headful
      title="RoFa - Đơn hàng đang trong tiến độ"
    />
    <div class="row p-0 m-0">
      <button class="btn btn-primary mb-2" @click="refresh"><b-icon-arrow-repeat></b-icon-arrow-repeat> Refresh</button>
      <div :class="((index % 2 === 0) ? 'bg-lm ' : 'bg-ev ') + 'col-12 p-0 m-0 py-3 bg-lm text-dark'" v-for="(element, index) in dataSuccessHistory" :key="index">
        <div class="row p-0 m-0 align-items-center">
          <div class="col-md text-dark">
            <b-icon-trash @click="() => {cancelOrderModal(element.id)}" class="text-danger"></b-icon-trash>
            {{ index + 1 }}
          </div>
          <b-link :to="'/cart/order/' + element.id" class="col-md text-dark">
            <span>{{ element.order_code }}</span>
          </b-link>
          <b-link :to="'/cart/order/' + element.id" class="col-md text-dark">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0" v-for="(orderDetail, i) in element.order_detail" :key="i">
                <div class="image-history-order" :style="{backgroundImage: 'url(' + orderDetail.product_id.images[0] + ')'}"></div>
              </div>
            </div>
          </b-link>
          <b-link :to="'/cart/order/' + element.id" class="col-md text-dark">
            <span v-for="(od, idx) in element.order_detail" :key="idx">
              <span v-if="idx === 0">
                {{ od.shop_id.firstname }} {{ od.shop_id.lastname }}
              </span>
            </span>
          </b-link>
          <b-link class="col-md text-dark">{{ element.quantity }} sản phẩm</b-link>
          <b-link :to="'/cart/order/' + element.id" class="col-md text-dark">
            <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(element.total_bill)}}</span>
          </b-link>
          <b-link :to="'/cart/order/' + element.id" class="col-md text-dark">
            <span>{{ element.created_at }}</span>
          </b-link>
        </div>
      </div>
    </div>
    <div>
      <b-modal centered v-model="modalCancelCartSuccess" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 color-main">
          <b-icon-check-circle-fill></b-icon-check-circle-fill>
        </p>
        <p class="m-0">
          Bạn đã hủy đặt hàng thành công!
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalEnterContentPlease" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h1 text-danger">
          <b-icon-exclamation-triangle></b-icon-exclamation-triangle>
        </p>
        <p class="m-0">
          Bạn vui lòng nhập lý do hủy đơn hàng!
        </p>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modalEnterCartSuccess" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h3 text-white">
          Bạn vui lòng nhập lý do
        </p>
        <textarea v-model="content" name="" id="" class="w-100" rows="10"></textarea>
        <div class="py-2">
          <button :disabled="content === ''" @click="cancelOrder" :class="((content === '') ? 'disabled ' : '' ) + 'btn color-bg-main text-white'">Hủy đặt hàng</button>
          <button @click="() => {this.modalEnterCartSuccess = false}" class="btn btn-primary">Trở lại</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataSuccessHistory'
  ],
  name: 'OrderSuccess',
  data () {
    return {
      modalCancelCartSuccess: false,
      modalEnterCartSuccess: false,
      modalEnterContentPlease: false,
      content: '',
      id: 0
    }
  },
  methods: {
    refresh () {
      this.$parent.orderHistory(0)
    },
    cancelOrderModal (id) {
      this.id = id
      this.modalEnterCartSuccess = true
    },
    async cancelOrder () {
      if (this.content !== '') {
        if (confirm('Bạn có muốn hủy đơn hàng này không?')) {
          var query = {}
          query.id = this.id
          query.content = this.content
          await this.$store.dispatch('cart/cancelOrder', query).then(async (result) => {
            this.modalCancelCartSuccess = true
            await this.$parent.orderHistory(0)
            this.modalCancelCartSuccess = false
            this.modalEnterCartSuccess = false
            this.id = 0
            this.content = ''
          }).catch((e) => {
          })
        }
      } else {
        this.modalEnterContentPlease = true
        await setTimeout(() => {
          this.modalEnterContentPlease = false
          this.id = 0
          this.content = ''
        }, 3000)
      }
    }
  }
}
</script>

<style>
.modal-content, textarea {
  background-color: #0000007d;
  border: none;
  color: #fff;
  text-align: center;
  padding: 2em 0em;
}
</style>
