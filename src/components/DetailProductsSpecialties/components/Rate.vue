<template>
  <div class="rate w-100" id="rate" ref="rate">
    <div class="row p-0 m-0">
      <div class="col-12">
        <p>ĐÁNH GIÁ SẢN PHẨM</p>
      </div>
      <div class="col-12 py-2" v-for="(item, index) in dataRateAmount" :key="index">
        <div class="row p-0 m-0 py-2 rated align-items-center">
          <div class="col-12 row align-items-center">
            <div class="avt-rater" :style="{backgroundImage: 'url(' + item.user_id.url_avata + ')'}"></div>
            &nbsp;
            <div class="name-rater">
              {{ item.user_id.first_name }}&nbsp;{{ item.user_id.last_name }}
              <div class="f-lex">
                <b-icon-star-fill v-if="Number(item.vote) >= 1" class="text-warning"></b-icon-star-fill>
                <b-icon-star-fill v-if="Number(item.vote) >= 2" class="text-warning"></b-icon-star-fill>
                <b-icon-star-fill v-if="Number(item.vote) >= 3" class="text-warning"></b-icon-star-fill>
                <b-icon-star-fill v-if="Number(item.vote) >= 4" class="text-warning"></b-icon-star-fill>
                <b-icon-star-fill v-if="Number(item.vote) >= 5" class="text-warning"></b-icon-star-fill>
                <b-icon-star v-if="Number(item.vote) < 1" class="text-warning"></b-icon-star>
                <b-icon-star v-if="Number(item.vote) < 2" class="text-warning"></b-icon-star>
                <b-icon-star v-if="Number(item.vote) < 3" class="text-warning"></b-icon-star>
                <b-icon-star v-if="Number(item.vote) < 4" class="text-warning"></b-icon-star>
                <b-icon-star v-if="Number(item.vote) < 5" class="text-warning"></b-icon-star>
              </div>
            </div>
          </div>
          <div class="col-12 p-0 m-0">
            {{item.content}}
          </div>
          <div class="col-12 p-2 m-0 bg-white" v-if="item.content_image.length !== 0">
            <div class="row p-0 m-0">
              <div class="pr-2 m-0" v-for="(uri, indexUri) in item.content_image" :key="(indexUri + 1) * (index + 1) + '-uri'">
                <div @click="$bvModal.show((indexUri + 1) * (index + 1) + '-uri')" class="image-rate" :style="{backgroundImage: 'url(' + uri + ')'}"></div>
                <b-modal class="image-cmt" centered :id="(indexUri + 1) * (index + 1) + '-uri'" hide-header hide-footer>
                  <div class="w-100 modal-child" style="width: 100%; height: 100%;">
                    <div class="row p-0 m-0">
                      <div class="col-12 p-0 m-0">
                        <img :src="uri" class="w-100" alt="">
                      </div>
                    </div>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 py-2 text-right" v-if="rateRead === true">
        <span @click="getRateAmountAll" class="text-dark" style="cursor: pointer;">
          Xem Tất Cả
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataRateAmount'
  ],
  name: 'Rate',
  data () {
    return {
      rateRead: true
    }
  },
  methods: {
    async getRateAmountAll () {
      this.$parent.getRateAmountAll()
      this.rateRead = false
    }
  }
}
</script>

<style>
.avt-rater {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d8d8d8;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.image-rate {
  width: 100px;
  height: 100px;
  background: #d8d8d8;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
