<template>
  <div class="w-100" v-if="dataPaymentHistory.length !== 0 || dataCancelHistory.length !== 0|| dataSuccessHistory.length !== 0">
    <div class="container-fluid py-3">
      <div class="row p-0 m-0">
        <div class="col-12 p-0 m-0">
          <div class="row p-0 m-0 py-3">
            <div @click="tabCancelActive" :disabled="tabCancel === true" :class="((tabCancel === true) ? 'color-bg-main disabled ' : '') + 'text-white tab btn btn-secondary mr-1'">Đơn hàng đã hủy</div>
            <div @click="tabSuccessActive" :disabled="tabSuccess === true" :class="((tabSuccess === true) ? 'color-bg-main disabled ' : '') + 'text-white tab btn btn-secondary mr-1'">Đơn hàng đang chờ nhận</div>
            <div @click="tabPaymentActive" :disabled="tabPayment === true" :class="((tabPayment === true) ? 'color-bg-main disabled ' : '') + 'text-white tab btn btn-secondary mr-1'">Đơn hàng đã nhận</div>
          </div>
        </div>
      </div>
      <OrderCancel v-if="tabCancel === true" :dataCancelHistory="dataCancelHistory" />
      <OrderSuccess v-if="tabSuccess === true" :dataSuccessHistory="dataSuccessHistory" />
      <OrderPayment v-if="tabPayment === true" :dataPaymentHistory="dataPaymentHistory" />
    </div>
  </div>
</template>

<script>
import OrderCancel from './Components/OrderCancel'
import OrderSuccess from './Components/OrderSuccess'
import OrderPayment from './Components/OrderPayment'
export default {
  name: 'ListOrder',
  data () {
    return {
      dataSuccessHistory: [],
      dataCancelHistory: [],
      dataPaymentHistory: [],
      tabCancel: true,
      tabSuccess: false,
      tabPayment: false
    }
  },
  async mounted () {
    await this.action()
  },
  methods: {
    tabCancelActive () {
      this.tabCancel = true
      this.tabSuccess = false
      this.tabPayment = false
    },
    tabSuccessActive () {
      this.tabCancel = false
      this.tabSuccess = true
      this.tabPayment = false
    },
    tabPaymentActive () {
      this.tabCancel = false
      this.tabSuccess = false
      this.tabPayment = true
    },
    async action () {
      await this.$parent.showLoading()
      await this.orderHistory(3)
      await this.orderHistory(0)
      await this.orderHistory(1)
      await this.$parent.hideLoading()
    },
    async orderHistory (type) {
      await this.$store.dispatch('cart/historyOrder', type).then(async (result) => {
        if (type === 3) {
          this.dataCancelHistory = result.data
        }
        if (type === 0) {
          this.dataSuccessHistory = result.data
        }
        if (type === 1) {
          this.dataPaymentHistory = result.data
        }
      }).catch((e) => {
      })
    }
  },
  components: {
    OrderCancel,
    OrderSuccess,
    OrderPayment
  }
}
</script>

<style>
.bg-lm {
  background: #bfbfbf;
}
.bg-ev {
  background: #d9d9d9;
}
.image-history-order {
  width: 50px;
  height: 50px;
  background-position: center!important;
  background-size: contain!important;
  background-repeat: no-repeat!important;
}
</style>
