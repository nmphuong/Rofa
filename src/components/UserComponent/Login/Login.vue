<template>
  <div class="login">
    <vue-headful
      title="RoFa - Login"
    />
    <div class="w-100">
      <transition name="bounce">
        <div v-if="account_incorrect" class="col-lg-12 bg-danger pt-2 pb-2 mt-2 mb-2 text-white" style="border-radius: 10px;">
          <b-icon-exclamation-octagon></b-icon-exclamation-octagon>&ensp;{{ error_messages }}
        </div>
      </transition>
      <div class="col-12 p-0 m-0">
        <div class="pb-2">
          <div class="stepbar">
            <div class="step_bar pt-2 pb-2">
              <div class="row p-0 m-0 step">
                <div class="col-12 m-0 p-0">
                  <div class="items m-0 p-0 d-flex">
                    <div class="customer" @click="() => {
                        loginWith = 'customer'
                        this.loginVerify()
                      }">
                      <span class="h5 text-uppercase">{{loginLang.messageLoginCustomer}}</span>
                      <div v-bind:class="['_step ', (loginWith === 'customer') ? 'active' : '']"></div>
                    </div>
                    &nbsp;-&nbsp;
                    <div class="seller" @click="() => {
                        loginWith = 'seller'
                        this.loginVerify()
                      }">
                      <span class="h5 text-uppercase">{{loginLang.messageLoginSeller}}</span>
                      <div v-bind:class="['_step ', (loginWith === 'seller') ? 'active' : '']"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-2">
          <input v-on:keyup.enter="handleLogin" v-model="user.username" class="form-control" name="username" type="text" :placeholder="loginLang.inputUsernamePlaceholder">
        </div>
        <div class="pb-2 position-relative">
          <input v-on:keyup.enter="handleLogin" v-model="user.passwords" class="form-control input-password" :type="typePassword" :placeholder="loginLang.inputPasswordPlaceholder">
          <b-icon-eye v-if="typePassword === 'password'" @click="(typePassword === 'text') ? (typePassword = 'password') : (typePassword = 'text')" class="position-absolute eyes"></b-icon-eye>
          <b-icon-eye-slash v-else @click="(typePassword === 'text') ? (typePassword = 'password') : (typePassword = 'text')" class="position-absolute eyes"></b-icon-eye-slash>
        </div>
      </div>
      <div class="col-12 p-0 pt-2 m-0">
        <div class="row p-0 m-0">
          <div class="col-md-6 p-0 m-0">
            <b-link to="/forgot-password" class="text-success">{{loginLang.linkForgotPassword}}</b-link>
          </div>
          <div class="col-md-6 p-0 m-0">
            <button @click="handleLogin" class="btn btn-success form-control">{{loginLang.buttonLogin}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginLang } from '../../../Lang/vi/login'
import User from '../../../models/user'
export default {
  name: 'Login',
  props: [
    'loginvs'
  ],
  data () {
    return {
      loginLang: loginLang,
      error_messages: '',
      typePassword: 'password',
      user: new User('', ''),
      loading: false,
      account_incorrect: false,
      loginWith: this.loginvs
    }
  },
  mounted () {
    this.$parent.changeTab('login')
    this.loginVerify()
  },
  methods: {
    async handleLogin () {
      this.$parent.showLoading()
      if (this.loginWith === 'customer') {
        this.error_messages = ''
        this.account_incorrect = false
        if (this.user.username && this.user.passwords) {
          await this.$store.dispatch('auth/loginCustomer', this.user).then(() => {
            this.error_messages = ''
            this.account_incorrect = false
            this.$router.push('/')
            this.$parent.info()
            this.$parent.hideLoading()
          }).catch((e) => {
            this.error_messages = loginLang.loginFaild
            this.account_incorrect = true
            this.$parent.hideLoading()
          })
        } else {
          this.error_messages = loginLang.requiredLogin
          this.account_incorrect = true
          this.$parent.hideLoading()
        }
      } else {
        this.error_messages = ''
        this.account_incorrect = false
        if (this.user.username && this.user.passwords) {
          await this.$store.dispatch('auth/loginSeller', this.user).then(() => {
            this.error_messages = ''
            this.account_incorrect = false
            this.$router.push('/')
            this.$parent.info()
            this.$parent.hideLoading()
          }).catch((e) => {
            this.error_messages = loginLang.loginFaild
            this.account_incorrect = true
            this.$parent.hideLoading()
          })
        } else {
          this.error_messages = loginLang.requiredLogin
          this.account_incorrect = true
          this.$parent.hideLoading()
        }
      }
    },
    async loginVerify () {
      if (this.loginWith === 'customer') {
        var customer = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers'))
        if (customer !== null && customer.loging === true) {
          this.$router.push('/')
        }
      } else if (this.loginWith === 'seller') {
        var seller = JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers'))
        if (seller !== null && seller.loging === true) {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style scoped>
.eyes {
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #28a745;
  font-size: 1.3em;
}
.input-password {
  padding-right: 50px;
}
</style>
