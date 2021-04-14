<template>
  <div class="rate w-100" id="rate" ref="rate">
    <div class="row p-0 m-0">
      <div class="col-12">
        <p>ĐÁNH GIÁ SẢN PHẨM</p>
      </div>
      <div class="col-12 py-3" v-if="dataRateAmount.length === 0">
        <span>Chưa có đánh giá</span>
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
    <div>
      <b-modal centered v-model="modalShow" hide-footer hide-header no-close-on-backdrop>
        <p class="mb-1 h5 text-white font-weight-bold">
          Mời bạn nhập đánh giá
        </p>
        <div class="row justify-content-center px-3">
          <div class="rateModal">
            <input @change="rateFunc(5)" type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input @change="rateFunc(4)" type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input @change="rateFunc(3)" type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input @change="rateFunc(2)" type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input @change="rateFunc(1)" type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
          <div class="col-12 p-0 m-0 py-4">
            <textarea placeholder="Nhập nội dung" name="" id="" rows="5" class="p-3 w-100 bg-none border-none text-white" v-model="content"></textarea>
          </div>
          <div class="m-0 p-0 col-12">
            <div class="row p-0 m-0">
              <div class="div-top col-12">
                <div class="row">
                  <div class="head col-12 p-0 pt-2 pb-2 d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <label for="upload-photo" id="addPhoto" class="color-main"><b-icon-plus></b-icon-plus> Add Photo</label>
                      <input type="file" @change="addPhotoChange" name="photo" id="upload-photo" style="opacity: 0;position: absolute;z-index: -1;" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-content col-12 p-0">
                <div class="row p-0 m-0">
                  <div :class="['p-0', 'p-2', (index === 0 ? 'col-12' : 'col-4')]" v-for="(image, index) in images" v-bind:key="index">
                    <div class="w-100 border-radius-5 border-1px-solid-d6d6d6 position-relative" style="height: auto;">
                      <img :src="image" class="w-100" style="height: auto" v-bind:alt="index"/>
                      <button class="position-absolute t-0-r-0-bg-none-bd-0-fs-1-5" type="button" @click="removeImages(index)"><b-icon-x></b-icon-x></button>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 p-0 m-0 py-2">
            <div class="row p-0 m-0 justify-content-center">
              <button class="btn color-bg-main text-white" @click="addRate">Đăng</button>
            </div>
          </div>
        </div>
      </b-modal>
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
  mounted () {
    this.checkBuyProduct()
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
.modal-content {
  background-color: #0000007d;
  border: none;
  color: #fff;
  text-align: center;
  padding: 2em 0em;
}
</style>
