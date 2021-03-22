<template>
  <div class="register">
    <vue-headful
      title="RoFa - Register"
    />
    <div class="w-100">
      <transition name="bounce">
        <div v-if="account_incorrect" class="col-lg-12 bg-danger pt-2 pb-2 mt-2 mb-2 text-white" style="border-radius: 10px;">
          <b-icon-exclamation-octagon></b-icon-exclamation-octagon>&ensp;{{ error_messages }}
        </div>
      </transition>
      <div class="col-12 p-0 m-0">
        <div class="full-name">
          <div class="row p-0 m-0">
            <div class="col-lg px-0 first-name pb-2">
              <!-- First name -->
              <input v-model="user.firstName" v-validate="'required'" class="form-control" name="first_name" type="text" :placeholder="registerLang.inputFirstNamePlaceholder">
              <span class='text-danger' v-if="errors.first('first_name')">{{registerLang.messageRequired}}</span>
              <!-- End first name -->
            </div>
            <div class="col-lg px-0 last-name pb-2">
              <!-- Last name -->
              <input v-model="user.lastName" v-validate="'required'" class="form-control" name="last_name" type="text" :placeholder="registerLang.inputLastNamePlaceholder">
              <span class='text-danger' v-if="errors.first('last_name')">{{registerLang.messageRequired}}</span>
              <!-- End last name -->
            </div>
          </div>
        </div>
        <div class="pb-2">
          <!-- Email -->
          <input v-model="user.email" v-validate="'required|email'" class="form-control" name="email" type="email" :placeholder="registerLang.inputEmailPlaceholder">
          <span class='text-danger' v-if="errors.first('email')">{{registerLang.messageValidateEmail}}</span>
          <!-- End email -->
        </div>
        <div class="pb-2">
          <!-- Username -->
          <input v-model="user.username" v-validate="'required'" class="form-control" name="username" type="text" :placeholder="registerLang.inputUsernamePlaceholder">
          <span class='text-danger' v-if="errors.first('username')">{{registerLang.messageRequired}}</span>
          <!-- End username -->
        </div>
        <div class="pb-2 position-relative">
          <!-- Password -->
          <input v-model="user.passwords" v-validate="'required|min:6'" class="form-control input-password" name="password" :type="typePassword" :placeholder="registerLang.inputPasswordPlaceholder" ref="pwt">
          <b-icon-eye v-if="typePassword === 'password'" @click="(typePassword === 'text') ? (typePassword = 'password') : (typePassword = 'text')" class="position-absolute eyes"></b-icon-eye>
          <b-icon-eye-slash v-else @click="(typePassword === 'text') ? (typePassword = 'password') : (typePassword = 'text')" class="position-absolute eyes"></b-icon-eye-slash>
          <span class='text-danger' v-if="errors.first('password')">{{registerLang.messageValidatePassword}}</span>
          <!-- End password -->
        </div>
        <div class="pb-2 position-relative">
          <!-- Repassword -->
          <input v-model="user.repassword" v-validate="'required|min:6|confirmed:pwt|numeric'" name="repassword" class="form-control input-password" :type="typePassword" :placeholder="registerLang.inputRepasswordPlaceholder" :data-vv-as="user.passwords">
          <span class='text-danger' v-if="errors.first('repassword')">{{registerLang.messageValidateConfirmPassword}}</span>
          <!-- End repassword -->
        </div>
        <div class="pb-2 position-relative">
          <!-- Phone -->
          <input v-model="user.phone" v-validate="'required|min:10|max:10'" class="form-control input-phone" name="phone" type="text" :placeholder="registerLang.inputPhonePlaceholder" @keypress="isNumber($event)">
          <span class='text-danger' v-if="errors.first('phone')">{{registerLang.messageValidatePhone}}</span>
          <!-- End phone -->
        </div>
      </div>
      <div class="col-12 p-0 pt-2 m-0">
        <div class="row p-0 m-0">
          <div class="col-md-6 p-0 m-0">
            <b-link to="/forgot-password" class="text-success">{{registerLang.linkForgotPassword}}</b-link>
          </div>
          <div class="col-md-6 p-0 m-0">
            <button @click="handleRegister" class="btn btn-success form-control">{{registerLang.buttonRegister}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerLang } from '../../../Lang/vi/register'
import User from '../../../models/user'
export default {
  name: 'Register',
  data () {
    return {
      registerLang: registerLang,
      error_messages: '',
      typePassword: 'password',
      user: new User(),
      loading: false,
      account_incorrect: false
    }
  },
  mounted () {
    this.$parent.changeTab('register')
  },
  methods: {
    async handleRegister () {
      var loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
        color: '#10a7f7',
        width: 60,
        height: 60,
        zIndex: 99999999,
        backgroundColor: '#fff',
        loader: 'spinner'
      })
      await this.$validator.validate().then(async (valid) => {
        if (!valid) {
          loader.hide()
          return false
        } else {
          this.error_messages = ''
          this.account_incorrect = false
          await this.$store.dispatch('auth/register', this.user).then(() => {
            this.error_messages = ''
            this.account_incorrect = false
            this.$router.push('/login')
            loader.hide()
          }).catch((e) => {
            this.error_messages = registerLang.registerFaild
            this.account_incorrect = true
            loader.hide()
          })
        }
      })
    },
    isNumber: function ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which)
      if (keyCode < 48 || keyCode > 57) { // 46 is dot
        $event.preventDefault()
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
