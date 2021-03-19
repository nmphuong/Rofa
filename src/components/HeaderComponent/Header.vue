<template>
  <div id="header">
    <section>
      <div>
        <b-navbar toggleable="lg" type="dark" class="header">
          <b-navbar-brand class="logo flex-grow-1" href="#">RoFa</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav class="justify-content-center text-center">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="px-2">
              <b-nav-item-dropdown text="Sản phẩm" right>
                <b-dropdown-item>Rau Củ Quả</b-dropdown-item>
                <b-dropdown-item>Trái Cây Nội Ngoại Nhập</b-dropdown-item>
                <b-dropdown-item>Thủy - Hai sản</b-dropdown-item>
                <b-dropdown-item>Gia Súc - Gia Cầm</b-dropdown-item>
                <b-dropdown-item>Hoa Cây Cảnh</b-dropdown-item>
                <b-dropdown-item>Đặc Sản vùng miền</b-dropdown-item>
                <b-dropdown-item>Dược Liệu</b-dropdown-item>
                <b-dropdown-item>Vật Tư Xây Dưng</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-nav-item class="px-2" href="#">Giới Thiệu</b-nav-item>
            <b-nav-item class="px-2" href="#">Tin Tức</b-nav-item>
            <b-nav-item class="px-2" href="#">Liên Hệ</b-nav-item>
            <b-nav-item class="px-2" href="http://rofa.vn">App Mobile</b-nav-item>
          </b-collapse>
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
.header {
  width: 100%;
  height: auto;
  background-image: linear-gradient(
    30deg,
    rgb(245, 249, 250) 20%,
    rgb(93, 247, 93) 10%,
    rgb(10, 167, 10)
  );
}
.logo {
  align-items: center;
  width: 50px;
  padding-left: 2%;
  line-height: 80px;
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
  color: rgb(239, 243, 243) !important;
}
li {
  list-style-type: none!important;
}
.nav-link {
  font-size: 1.5rem;
}
@media only screen and (max-width: 991px) {
  .header {
    background-image: linear-gradient( to right,
      rgb(93, 247, 93),
      rgb(10, 167, 10)
    )
  }
  .navbar-nav .dropdown-menu {
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
