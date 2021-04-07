<template>
  <div class="w-100">
    <div class="images w-100 main-image-product bg-image-detail" :style="{backgroundImage: 'url(' + imageProductShow + ')'}"></div>
    <div class="w-100 scroll-image image-child py-1">
      <div class="d-flex p-0 m-0 image-child" v-if="Array.isArray(this.images)">
        <div class="col-3 p-1 clk-chg" v-for="(image, index) in this.images" :key="index" @mouseover="() => {imageProductShow = image}" @click="() => {imageProductShow = image}">
          <div class="w-100 image-child" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        </div>
      </div>
      <div class="d-flex p-0 m-0 image-child" v-else>
        <div class="col-3 p-1 clk-chg">
          <div class="w-100 image-child" :style="{backgroundImage: 'url(' + this.images + ')'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'images'
  ],
  name: 'Images',
  data () {
    return {
      imageProductShow: (Array.isArray(this.images) === true) ? this.images[0] : this.images
    }
  }
}
</script>

<style>
.main-image-product {
  height: 300px;
  background-position: center!important;
  background-size: contain!important;
  background-repeat: no-repeat!important;
}
.image-child {
  height: 100px;
  background-position: center!important;
  background-size: contain!important;
  background-repeat: no-repeat!important;
}
.d-flex.image-child {
  overflow-x: auto;
  overflow-y: hidden;
}
.clk-chg {
  cursor: pointer;
}
.bg-image-detail {
  background: rgb(194, 194, 194);
}
</style>
