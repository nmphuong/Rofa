<template>
  <div class="w-100">
    <div class="images w-100 main-image-product bg-white" :style="{backgroundImage: 'url(' + imageProductShow + ')'}"></div>
    <div class="w-100 scroll-image image-child py-1">
      <div class="d-flex p-0 m-0 image-child">
        <div class="col-3 p-1 clk-chg" v-for="(image, index) in images" :key="index" @mouseover="() => {imageProductShow = image}" @click="() => {imageProductShow = image}">
          <div class="w-100 image-child" :style="{backgroundImage: 'url(' + image + ')'}"></div>
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
      imageProductShow: this.images[0]
    }
  }
}
</script>

<style>
.main-image-product {
  height: 300px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.image-child {
  height: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.d-flex.image-child {
  overflow-x: auto;
  overflow-y: hidden;
}
.clk-chg {
  cursor: pointer;
}
</style>
