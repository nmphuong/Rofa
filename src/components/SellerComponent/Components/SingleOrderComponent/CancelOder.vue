<template>
<div class="right">
    <vue-headful
      title="RoFa"
    />
  <div class="right__content">
    <div class="right__title">Bảng điều khiển</div>
      <p class="right__desc">Lịch sử đơn hàng Đã Hủy</p>
      <div class='right__table'>
        <div class='right__tableWrapper'>
          <table class="table-table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>MÃ ĐƠN HÀNG</th>
                <th>SỐ LƯỢNG</th>
                <th>TỔNG TIỀN</th>
                <th>THỜI GIAN</th>
                <!-- <th>TRẠNG THÁI</th> -->
                <th>XEM CHI TIẾT</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="(item, index) in orderCancel" :key="index" >
                <td data-label='STT'> {{ index }} </td>
                <td data-label='MÃ ĐƠN HANG'> {{ item.order_code }} </td>
                <td data-label='SỐ LƯỢNG'>
                 <div class=''> {{ item.quantity }}</div>
                </td>
                <td data-label='TỔNG TIỀN'>
                  <span>{{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.total_bill) }}</span>
                </td>
                <td data-label='THỜI GIAN'>
                  {{ new Intl.DateTimeFormat('vi-VN', { dateStyle: 'long' }).format(new Date(item.created_at)) }}
                  <!-- {{ item.created_at }} -->
                </td>
                <!-- <td data-label='TRẠNG THÁI'> {{ item.status_order == 3 :  }}</td> -->
                <td data-label='CHI TIẾT' class='right__iconTable'>
                  <b-button class="color-bg-main">Xem chi tiết</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
      <b-modal id="modal-detail" centered hide-footer size='lg' scrollable >
        <div class="row">
          <div class="col-md-4">
            <div class="img-product"></div>
          </div>
          <div class="col-md-8">
            <div>
              <span>Mô tả</span>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CancelOrder',
  data () {
    return {
      orderCancel: null
    }
  },
  mounted () {
    this.getHistoryOrderCancel()
  },
  methods: {
    async getHistoryOrderCancel () {
      await this.$store.dispatch('seller/getHistoryOrderCancel').then(async (result) => {
        console.log(result)
        this.orderCancel = result.data
      }).catch((e) => {
      })
    }
  }
}
</script>

<style>
</style>
