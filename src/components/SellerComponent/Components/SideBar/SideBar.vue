<template>
 <div class='left'>
    <span class='left__icon' @click="sidebarClick">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class='left__logo '>
        <img class="logo" src="@/assets/logo.png" alt="logo-rofa">
        <span>Nong San RoFa</span>
      </div>
    <div class='left__content'>
      <div class='left__profile'>
        <div class='left__image' :style="{backgroundImage: 'url(' + dataSeller.url_avatar + ')'}">
        </div>
        <p class='left__name'>{{ dataSeller.firstname }}&nbsp;{{ dataSeller.lastname }}</p>
      </div>
      <ul class='left__menu'>
        <li class='left__menuItem'>
          <b-link to="/seller/dashboard" class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Thống Kê
          </b-link>
        </li>
         <li class='left__menuItem'>
          <b-link to="/seller/revenue" class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Doanh Thu
          </b-link>
        </li>
        <li class='left__menuItem' @click="openMenu">
          <div class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Sản Phẩm
            <span class="left__iconDown"><b-icon-chevron-down></b-icon-chevron-down></span>
          </div>
          <div class='left__text'>
            <b-link class='left__link' to='/seller/add-product'>Thêm Sản Phẩm</b-link>
            <b-link class='left__link' to='/seller/view-product'>Xem Sản Phẩm</b-link>
          </div>
        </li>
        <li class='left__menuItem' @click="openMenu">
          <div class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Đơn hàng
            <span class="left__iconDown"><b-icon-chevron-down></b-icon-chevron-down></span>
          </div>
          <div class='left__text'>
            <b-link class='left__link' to="/seller/order/processing">Đang xử lý</b-link>
            <b-link class='left__link' to="/seller/order/transport">Đang Vân Chuyển</b-link>
            <b-link class='left__link' to="/seller/order/finish">Hoàn Thành</b-link>
          </div>
        </li>
        <li class='left__menuItem'>
          <b-link to="/seller/account" class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Tài Khoản
          </b-link>
        </li>
        <li class='left__menuItem'>
          <a href='' class='left__title'><b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Đăng Xuất</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'dataSeller'
  ],
  name: 'SideBarSeller',
  data () {
    return {
      //
    }
  },
  methods: {
    openMenu (event) {
      var currentmenuItem = event.currentTarget
      if (currentmenuItem.classList.contains('open')) {
        currentmenuItem.classList.remove('open')
      } else {
        currentmenuItem.classList.add('open')
      }
    },
    sidebarClick () {
      var left = document.querySelector('.left')
      if (left.classList.contains('show')) {
        left.classList.remove('show')
      } else {
        left.classList.add('show')
      }
    }
  }
}
</script>

<style>
.logo{
  width: 70px;
}
</style>
