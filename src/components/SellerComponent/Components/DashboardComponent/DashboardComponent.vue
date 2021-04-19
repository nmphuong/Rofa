<template>
  <div id='dashboard' class='right'>
    <div class='right__content'>
      <div class='right__title'>Bảng điều khiển</div>
      <p class='right__desc'>Bảng điều khiển</p>
      <div class='right__cards'>
        <b-link to='/seller/view-product'>
        <div class='right__card'>
          <div class='right__cardTitle'>Sản Phẩm</div>
          <div class='right__cardNumber'>72</div>
          <div class='right__cardDesc'>
            Xem Chi Tiết <b-icon-arrow-right class="icon"></b-icon-arrow-right>
          </div>
        </div>
        </b-link>
        <a class='right__card' href='view_customers.html'>
          <div class='right__cardTitle'><span>Hoàn Thành</span></div>
          <div class='right__cardNumber'>12</div>
          <div class='right__cardDesc'>
            Xem Chi Tiết <b-icon-arrow-right class="icon"></b-icon-arrow-right>
          </div>
        </a>
        <a class='right__card' href='view_p_category.html'>
          <div class='right__cardTitle'>Đang Xử Lý</div>
          <div class='right__cardNumber'>4</div>
          <div class='right__cardDesc'>
            Xem Chi Tiết <b-icon-arrow-right class="icon"></b-icon-arrow-right>
          </div>
        </a>
        <a class='right__card' href='view_orders.html'>
          <div class='right__cardTitle'>Đang Vận Chuyển</div>
          <div class='right__cardNumber'>72</div>
          <div class='right__cardDesc'>
            Xem Chi Tiết <b-icon-arrow-right class="icon"></b-icon-arrow-right>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboar',
  data () {
    return {
      // Highcharts: Highcharts,
    }
  },
  mounted () {
    //
  },
  methods: {
    //
  },
  components: {
  }
}
</script>
<style>
</style>
