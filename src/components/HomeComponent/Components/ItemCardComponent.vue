<template>
  <div class="title-component">
    <div class="w-100">
      <div class="row p-0 m-0">
        <div class="bg-title col-12 p-0 m-0">
          <div class="row p-0 m-0">
            <div class="__title-step h-100 py-3 px-5 text-uppercase">{{products.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-0 m-0">
      <Content v-for="(data, index) in products.data" :key="index" :datas="data" />
    </div>
  </div>
</template>

<script>
import Content from './ContentComponent'
export default {
  name: 'ItemCardComponent',
  props: [
    'products'
  ],
  data () {
    return {
      //
    }
  },
  mounted () {
    //
  },
  methods: {
    //
  },
  components: {
    Content
  }
}
</script>

<style scoped>
</style>
