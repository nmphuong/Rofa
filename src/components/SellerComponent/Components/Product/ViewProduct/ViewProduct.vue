<template>
  <div class='right'>
    <div class='right__content'>
      <div class='right__title'>{{ ProductLang.Dashboard }}</div>
      <p class='right__desc'>{{ ProductLang.ViewProducts }}</p>
      <div class='right__table'>
        <div class='right__tableWrapper'>
          <table class="table-table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Giá SP</th>
                <th>Số Lượng Đã bán</th>
                <th>Trạng Thái</th>
                <th>Thời gian</th>
                <th>Xem Chi Tiết</th>
                <th>Xoá</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="(item, index) in getProductSeller" :key="index" >
                <td data-label='STT'>{{ index + 1}}</td>
                <td data-label='Tên sản phẩm'>{{ item.name }}</td>
                <td data-label='Hình ảnh'>
                 <div class='img-product' :style="{backgroundImage: 'url(' + item.images[0] + ')'}"></div>
                </td>
                <td data-label='Giá SP'>
                  <span>{{item.price}} Vnd</span>
                </td>
                <td data-label='Đã bán'>{{item.ammount_product_cart}}</td>
                <td data-label='Từ khoá'>{{item.status == 1 ? 'Đang hoạt động' : item.status == 3 ? 'Sản phẩm đã ẩn' : 'Sản phẩm hết hạn' }}</td>
                <td data-label='Thời gian'>{{item.created_at}}</td>
                <td data-label='Sư' class='right__iconTable'>
                  <b-button @click="showModal(item)" class="color-bg-main">Xem chi tiết</b-button>
                </td>
                <td data-label='Xoá' class='right__iconTable'>
                  <span>
                    <b-icon-trash></b-icon-trash>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="itemDetail !== null">
      <b-modal id="modal-detail" :title="itemDetail.name" v-model="detailProduct" centered hide-footer size='lg' scrollable >
        <div class="row">
          <div class="col-md-4">
            <div v-for="(src, idx) in itemDetail.images" :key="idx" class="img-product" :style="{backgroundImage: 'url(' + src + ')'}"></div>
          </div>
          <div class="col-md-8">
            <div>
              <span>Mô tả</span>
              <span>{{itemDetail.long_desc}}</span>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { ProductLang } from '../../../../../Lang/vi/product'
export default {
  name: 'ViewProduct',
  props: [
    'dataSeller'
  ],
  data () {
    return {
      idseller: this.dataSeller.id,
      ProductLang: ProductLang,
      getProductSeller: null,
      detailProduct: false,
      itemDetail: null
    }
  },
  mounted () {
    this.actionLoadData()
  },
  methods: {
    async showModal (item) {
      this.itemDetail = item
      this.detailProduct = true
    },
    async actionLoadData () {
      this.getProductSeller = null
      await this.getProduct()
    },
    async getProduct () {
      await this.$store.dispatch('seller/getProductSeller').then(async (result) => {
        console.log(result)
        this.getProductSeller = result.data
      }).catch((e) => {
      })
    }
  }
}
</script>

<style>
.modalvue {
  width: 20px;
  height: 25px;
}
.modal-content{
  padding: 0px;
}
.img-product{
width: 100px;
height:100px;
background-position:center;
background-size:contain;
background-repeat:no-repeat;
}
</style>
