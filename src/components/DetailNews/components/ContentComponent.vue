<template>
  <div class="w-100">
    <vue-headful
      :title="'RoFa - ' + dataNews.title_website"
    />
    <div class="row p-0 m-0">
      <div class="col-12 m-0 p-0 pb-4" v-html="dataNews.post_date"></div>
      <div class="col-12 m-0 p-0 font-weight-bold h2 pb-4" v-html="dataNews.title"></div>
      <div class="col-12 m-0 p-0 font-weight-bold h5 pb-4" v-html="dataNews.short_content"></div>
      <div class="col-12 m-0 p-0 font-weight-bold h2 pb-4">
        <img class="w-100" :src="dataNews.url_img" alt="">
      </div>
      <div class="col-12 m-0 p-0 pb-4" v-html="dataNews.content"></div>
      <div class="col-12 m-0 p-0 font-weight-bold h5 pb-2 text-right" v-html="dataNews.post_author"></div>
      <div class="col-12 m-0 p-0 pb-2 text-right font-italic">Nguồn: <span v-html="dataNews.post_source"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataNews'
  ],
  name: 'ContentNews',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
</style>
