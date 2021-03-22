<template>
  <div class="login">
    <vue-headful
      title="RoFa - Login"
    />
    <div class="w-100">
      <div class="col-12 p-0 m-0">
        <div class="pb-2">
          <input class="form-control" name="username" type="text" placeholder="Email, Phone, Userame">
        </div>
        <div class="pb-2">
          <input class="form-control" type="password" placeholder="Password">
        </div>
      </div>
      <div class="col-12 p-0 pt-2 m-0">
        <div class="row p-0 m-0">
          <div class="col-md-6 p-0 m-0">
            <b-link to="/forgot-password" class="text-success">Quên mật khẩu?</b-link>
          </div>
          <div class="col-md-6 p-0 m-0">
            <button class="btn btn-success form-control">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
