<template>
  <div class="rate w-100" id="rate">
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
          <div class="col-12 p-0 m-0" v-if="item.content_image.length !== 0">
            <div class="row p-0 m-0">
              <div class="p-2 m-0" v-for="(uri, indexUri) in item.content_image" :key="(indexUri + 1) * index + '-uri'">
                <div class="image-rate" :style="{backgroundImage: 'url(' + uri + ')'}"></div>
              </div>
            </div>
          </div>
        </div>
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
      //
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
