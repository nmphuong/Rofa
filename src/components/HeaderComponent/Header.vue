<template>
  <div id="header" class="w-100">
    <section class="section__header">
      <div class="header__menu">
        <b-navbar toggleable="lg" type="dark" class="header">
          <b-navbar-brand class="logo rofa-logo flex-grow-1 d-flex justify-content-center align-items-center" href="#">
            <img class="logo" src="@/assets/logo.png" alt="logo-rofa">
            <span class="h5">Nong San RoFa</span>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav class="justify-content-start text-center">
              <b-nav-item class="px-0" @click="() => {this.$router.push('/')}">Trang chủ</b-nav-item>
              <b-nav-item class="px-0" href="#">Giới Thiệu</b-nav-item>
              <b-navbar-nav class="px-1">
                <b-nav-item-dropdown text="Sản phẩm" right>
                  <b-dropdown-item>Đặc Sản vùng miền</b-dropdown-item>
                  <b-dropdown-item>Rau Sạch</b-dropdown-item>
                  <b-dropdown-item>Nông Sản</b-dropdown-item>
                  <b-dropdown-item>Thủy - Hải Sản</b-dropdown-item>
                  <b-dropdown-item>Vật Tư Thức Ăn</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
              <b-nav-item class="px-0" href="http://rofa.vn">Tải ứng dụng</b-nav-item>
              <b-nav-item class="px-0" href="#">Bán hàng</b-nav-item>
              <b-nav-item class="px-0" href="#">Liên Hệ</b-nav-item>
          </b-collapse>
          <b-nav-item class="px-0" @click="() => {this.$router.push('/user/login')}">Đăng nhập</b-nav-item>
          <b-nav-item class="px-0" @click="() => {this.$router.push('/user/register')}">Đăng ký</b-nav-item>
        </b-navbar>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style>
img.logo {
  width: 70px;
  height: 70px;
}
#header {
  position: fixed;
  top: 0;
  z-index: 999;
  background: rgba(37, 36, 36, 0.8);
  transition: all 1s linear;
}
.header {
  background: none;
}
#header.bg-sticky {
  background: rgba(37, 36, 36, 0.8);
}
a.logo {
  font-size: 60px;
  color: rgb(10, 167, 10) !important;
  font-weight: 900;
  font-family: "Condiment, serif";
}
.navbar {
  width: 100%;
}
.nav-link {
  color: #8dc63f !important;
}
li {
  list-style-type: none!important;
}
.nav-link {
  font-size: 1.5rem;
}
.login-register a,
.__menu a {
  display: flex;
}
.dropdown-toggle {
    display: flex;
    align-items: center;
}
.nav-item.b-nav-dropdown {
  justify-content: center;
  display: flex;
}
@media only screen and (max-width: 991px) {
  .navbar-nav .dropdown-menu {
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
  }
  .login-logout-line {
    display: none;
  }
}
@media only screen and (min-width: 992px) {
  .nav-link {
    font-size: 1rem;
  }
}
</style>
