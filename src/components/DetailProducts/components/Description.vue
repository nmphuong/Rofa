<template>
  <div class="w-100 py-2" id="description">
    <div class="row p-0 m-0">
      <span class="col-12 h4 font-weight-bold">
        <span v-html="shortDescription"></span>
      </span>
      <span v-bind:class="((readmore === false) ? '' : 'description-show ') + 'text-description col-12'" v-html="longDescription"></span>
      <div class="col-12 text-right pt-2">
        <button @click="() => {readmore = true}" v-if="readmore === false" class="btn color-bg-main text-white w-auto">Đọc thêm</button>
        <button @click="() => {readmore = false}" v-else class="btn color-bg-main text-white w-auto">Ẩn bớt</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'longDescription',
    'shortDescription'
  ],
  name: 'Description',
  data () {
    return {
      readmore: false
    }
  }
}
</script>

<style>
.text-description {
  height: 100px;
  overflow: hidden;
}
.description-show {
  height: auto!important;
}
</style>
