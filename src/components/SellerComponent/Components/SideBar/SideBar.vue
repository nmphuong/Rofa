<template>
  <div class='left'>
    <span class='left__icon' @click="sidebarClick">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class='left__content'>
      <div class='left__logo'>LOGO</div>
      <div class='left__profile'>
        <div class='left__image'>
          <img src='//' alt='' />
        </div>
        <p class='left__name'>Tai</p>
      </div>
      <ul class='left__menu'>
        <li class='left__menuItem'>
          <a href='index.html' class='left__title'
            > <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Thống Kê  </a
          >
        </li>
         <li class='left__menuItem'>
          <a href='' class='left__title'
            ><b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Doanh Thu</a
          >
        </li>
        <li class='left__menuItem'>
          <div class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Sản Phẩm
            <span class="left__iconDown"><b-icon-chevron-down></b-icon-chevron-down></span>
          </div>
          <div class='left__text'>
            <a class='left__link' href='insert_product.html'>Thêm Sản Phẩm</a>
            <a class='left__link' href='view_product.html'>Xem Sản Phẩm</a>
          </div>
        </li>
        <li class='left__menuItem'>
          <div class='left__title'>
            <b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Đơn hàng
            <span class="left__iconDown"><b-icon-chevron-down></b-icon-chevron-down></span>
          </div>
          <div class='left__text'>
            <a class='left__link' href='insert_p_category.html'>Hoàn Thành</a>
            <a class='left__link' href='view_p_category.html'>Đang Vân Chuyển</a>
            <a class='left__link' href='#'>Đang xử lý</a>
          </div>
        </li>
        <li class='left__menuItem'>
          <a href='view_orders.html' class='left__title'
            ><b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Tài Khoản</a
          >
        </li>
        <li class='left__menuItem'>
          <a href='' class='left__title'
            ><b-icon-pie-chart-fill></b-icon-pie-chart-fill>&emsp;Đăng Xuất</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
window.addEventListener('load', async () => {
  var menuItem = document.querySelectorAll('.left__menuItem')
  menuItem.forEach(function (el) {
    el.addEventListener('click', openMenu)
  })

  function openMenu (event) {
    var currentmenuItem = event.currentTarget
    if (currentmenuItem.classList.contains('open')) {
      currentmenuItem.classList.remove('open')
    } else {
      currentmenuItem.classList.add('open')
    }
  }
})

export default {
  name: 'SideBarSeller',
  data () {
    return {
      //
    }
  },
  methods: {
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
</style>
