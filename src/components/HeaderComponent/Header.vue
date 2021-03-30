<template>
  <div id="header" class="w-100">
    <section class="section__header">
      <div class="header__menu">
        <b-navbar toggleable="lg" type="dark" class="header">
          <b-navbar-brand class="logo rofa-logo flex-grow-1 d-flex justify-content-center align-items-center" href="#">
            <img class="logo" src="@/assets/logo.png" alt="logo-rofa">
            <span class="h5">{{headerLang.nongSanRoFa}}</span>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav class="justify-content-start text-center">
              <b-nav-item class="px-0" @click="() => {this.$router.push('/')}">{{headerLang.homePage}}</b-nav-item>
              <b-nav-item class="px-0" href="#">
                <b-link class="nav-link" to="/gioi-thieu">{{headerLang.introduce}}</b-link>
              </b-nav-item>
              <b-navbar-nav class="px-1">
                <b-nav-item-dropdown text="Sản phẩm" right>
                  <b-dropdown-item>
                    <b-link class="nav-link" to="/products/specialties">
                      {{headerLang.regionalSpecialties}}
                    </b-link>
                  </b-dropdown-item>
                  <b-dropdown-item>{{headerLang.freshVegetable}}</b-dropdown-item>
                  <b-dropdown-item>{{headerLang.agricultural}}</b-dropdown-item>
                  <b-dropdown-item>{{headerLang.seaFood}}</b-dropdown-item>
                  <b-dropdown-item>{{headerLang.foodSupplies}}</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
              <b-nav-item class="px-0" href="http://rofa.vn">{{headerLang.getTheApp}}</b-nav-item>
              <b-nav-item class="px-0" href="#">{{headerLang.sell}}</b-nav-item>
              <b-nav-item class="px-0" href="#">{{headerLang.contact}}</b-nav-item>
          </b-collapse>
          <b-nav-item class="px-0" @click="() => {this.$router.push('/user/login')}">{{headerLang.login}}</b-nav-item>
          <b-nav-item class="px-0" @click="() => {this.$router.push('/user/register')}">{{headerLang.registration}}</b-nav-item>
        </b-navbar>
      </div>
    </section>
  </div>
</template>

<script>
import { headerLang } from '../../Lang/vi/header'
export default {
  data () {
    return {
      headerLang: headerLang
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
  position: relative;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
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
