<template>
  <div class="w-100 py-1" id="description">
    <div class="row p-0 m-0 align-items-center">
      <div class="col-12 pb-2">
        <span class="h3">Thông tin shop</span>
      </div>
      <div class="col-lg pb-1">
        <div class="img-avt-shop" :style="{backgroundImage: 'url(' + detailShop.url_avatar + ')'}"></div>
      </div>
      <div class="col-lg pb-1">
        {{detailShop.firstname}}&nbsp;{{detailShop.lastname}}
      </div>
      <div class="col-lg pb-1">
        {{detailShop.email}}
      </div>
      <div class="col-lg pb-1">
        Tham gia vào: {{ new Date(detailShop.created_at).toLocaleDateString("vi") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'detailShop'
  ],
  name: 'Shop',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.img-avt-shop {
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid rgb(203, 203, 203);
}
</style>
