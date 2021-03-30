<template>
  <div class="banner-component">
    <div class="w-100">
      <div class="row p-0 m-0">
        <div class="bg-banner col-12 p-0 m-0">
          <div class="row p-0 m-0">
            <img class="__img-step w-100 py-2 px-1" :src="banner" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  props: [
    'banner'
  ],
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
</style>
