<template>
  <div id="footer" class="w-100">
    <div class="container-fluid">
      <div class="row p-0 m-0 py-5">
        <!-- Support customer -->
        <div class="col-md-3">
          <span class="font-weight-bold text-uppercase">
            {{ footerLang.customerSupport }}
          </span>
          <ul class="p-0 m-0 pt-4">
            <li>
              <span class="text-danger font-weight-bold">
                {{ footerLang.holine }}
              </span>
            </li>
            <li>
              <span>{{ footerLang.emailSupport }}</span>
            </li>
          </ul>
        </div>
        <!-- About -->
        <div class="col-md-3">
          <span class="font-weight-bold text-uppercase">
            {{ footerLang.aboutRofa }}
          </span>
          <ul class="p-0 m-0 pt-4">
            <li>
              <span>
                <b-link class="text-dark" to='/gioi-thieu'>{{ footerLang.introduce }}</b-link>
              </span>
            </li>
          </ul>
        </div>
        <!-- Cooperation and links -->
        <div class="col-md-3">
          <span class="font-weight-bold text-uppercase">
            {{ footerLang.cooperationAndLinks }}
          </span>
          <ul class="p-0 m-0 pt-4">
            <li>
              <span>
                <b-link class="text-dark" to='/bang-hang'>{{ footerLang.sellers }}</b-link>
              </span>
            </li>
          </ul>
        </div>
        <!-- Download app -->
        <div class="col-md-3">
          <span class="font-weight-bold text-uppercase">
            {{ footerLang.downloadApp }}
          </span>
          <ul class="p-0 m-0 pt-4">
            <li>
              <a href="https://wwww.google.com">
                <img style="width: 150px;" :src="require('@/assets/images/appstore.png')" alt="">
              </a>
            </li>
            <li>
              <a href="https://wwww.google.com">
                <img style="width: 150px;" :src="require('@/assets/images/playstore.png')" alt="">
              </a>
            </li>
          </ul>
        </div>
        <!-- Address -->
        <div class="col-md-12">
          <span class="font-weight-bold">
            {{ footerLang.titleAddress }}:
          </span>
          <span>&nbsp;{{ footerLang.addressOffice }}</span>
        </div>
        <!-- Coppyrighgt -->
        <div class="col-md-12 py-3">
          <span>&nbsp;{{ footerLang.coppyRight }}</span>
        </div>
        <div class="col-md-12 py-3">
          <span>&nbsp;{{ footerLang.license }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { footerLang } from '../../Lang/vi/footer'
export default {
  name: 'Footer',
  data () {
    return {
      footerLang: footerLang
    }
  }
}
</script>

<style>
#footer {
  background: #fff;
}
</style>
