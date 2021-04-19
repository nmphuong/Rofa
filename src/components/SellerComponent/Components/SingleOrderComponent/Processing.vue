<template>
<div class="right">
    <vue-headful
      title="RoFa - Đơn hàng đang xử lý"
    />
  <div class="right__content">
    <div class="right__title">Bảng điều khiển</div>
      <p class="right__desc">Xem sản phẩm</p>
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
                <th>TRẠNG THÁI</th>
                <th>XEM CHI TIẾT</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td data-label='STT'></td>
                <td data-label='MÃ ĐƠN HANG'></td>
                <td data-label='SỐ LƯỢNG'>
                 <div class=''></div>
                </td>
                <td data-label='TỔNG TIỀN'>
                  <span></span>
                </td>
                <td data-label='THỜI GIAN'></td>
                <td data-label='TRẠNG THÁI'></td>
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
  name: 'ViewProduct',
  data () {
    return {
    //
    }
  }
}
</script>

<style>
</style>
