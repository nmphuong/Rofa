<template>
  <div class="step-bar">
    <div class="row p-0 m-0">
      <div class="container">
        <div class="col-md-8 m-auto p-0">
          <div class="stepbar">
            <div class="step_bar pt-2 pb-2">
              <div class="row p-0 m-0 step">
                <div class="col-12 m-0 p-0">
                  <div class="items m-0 p-0 d-flex">
                    <div class="login" @click="() => {
                        step_amount = 'login'
                        this.$router.push('/login')
                      }">
                      <span class="h5">{{authenLang.login}}</span>
                      <div v-bind:class="['_step ', (step_amount === 'login') ? 'active' : '']"></div>
                    </div>
                    &nbsp;-&nbsp;
                    <div class="register" @click="() => {
                        step_amount = 'register'
                        this.$router.push('/register')
                      }">
                      <span class="h5">{{authenLang.register}}</span>
                      <div v-bind:class="['_step ', (step_amount === 'register') ? 'active' : '']"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-100 form">
            <div class="row p-0 m-0">
              <div class="col-12 p-0 m-0 d-flex justify-content-center">
                <div class="w-75 py-5">
                  <div class="control input">
                    <router-view/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authenLang } from '../../Lang/vi/authen'
export default {
  data () {
    return {
      step_amount: 'login',
      authenLang: authenLang
    }
  },
  methods: {
  }
}
</script>

<style>
.step {
  display: inline;
}
.step .items div._step {
  width: 70px;
  height: 2px;
  background-color: transparent;
  display: block;
  margin: 0px 2px;
  padding: 0;
}
.step .items div._step.active{
  background-color: rgb(10, 167, 10);
}
.login,
.register{
  cursor: pointer;
}
.form {
  background: #eeeae7;
}
</style>
