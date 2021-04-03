<template>
  <div class="w-100">
    <div class="row p-0 m-0">
      <div class="col-12">
        <span class="h5 font-weight-bold">{{ dataProduct.name }}</span>
      </div>
      <div class="col-12">
        <span v-if="this.resRate !== 0">
          <span class="text-danger text-decoration">{{ resRate.toFixed(1) }}</span>&nbsp;
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
          <b-icon-star-fill class="text-warning"></b-icon-star-fill>
        </span>
        <span v-else>
          Chưa có đánh giá
        </span>
      </div>
      <div class="col-12">
        <span class="text-danger h3">
          Giá: {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataProduct.price)}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataProduct',
    'dataListRate'
  ],
  name: 'InfoProduct',
  data () {
    return {
      resRate: 5
    }
  },
  async mounted () {
    await this.totalRate()
  },
  methods: {
    totalRate () {
      var five = (this.dataListRate[0] * 5)
      var four = (this.dataListRate[1] * 4)
      var three = (this.dataListRate[2] * 3)
      var two = (this.dataListRate[3] * 2)
      var one = (this.dataListRate[4] * 1)
      var person = this.dataListRate[0] + this.dataListRate[1] + this.dataListRate[2] + this.dataListRate[3] + this.dataListRate[4]
      this.resRate = (person === 0) ? 0 : (five + four + three + two + one) / (person)
    }
  }
}
</script>

<style>
</style>
