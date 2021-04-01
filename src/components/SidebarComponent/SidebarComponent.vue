<template>
  <div class="sidebar w-100 h-100">
    <div class="color-bg-main text-white py-3 h-100">
      <div class="col-12 text-center">
        <p class="h4">Danh Mục</p>
      </div>
      <div class="col-12 text-left">
        <div class="m-0 text-white py-2" to='/products/specialties'>
          <b-link class="nav-link p-2 item" to="/products/specialties">
            Đặc sản vùng miền
          </b-link>
        </div>
        <div class="m-0 text-white py-2" to='/products/fresh-vegetable'>
          <b-link class="nav-link p-2 item" to="/products/fresh-vegetable">
            Nông sản
          </b-link>
        </div>
        <div class="m-0 text-white py-2">
          <b-link class="nav-link p-2 item" to="/products/sea-food">
            Thủy - Hải sản
          </b-link>
        </div>
        <div class="m-0 text-white py-2">
          <b-link class="nav-link p-2 item" to="/products/agricultural">
            Rau sạch
          </b-link>
        </div>
        <div class="m-0 text-white py-2">
          <b-link class="nav-link p-2 item" to="/products/food-supplies">
            Vật tư thức ăn
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data () {
    return {
      //
    }
  },
  mounted () {
  }
}
</script>

<style>
.item {
  border: 1px solid #fff;
  color: #fff!important;
}
.item:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
}
</style>
