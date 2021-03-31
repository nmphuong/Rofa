<template>
  <div>
      <div class="container" style="text-align:center">
        <h2 class="product-text">Sản Phẩm</h2>
        <div class=" product row ">
            <div class="product_left col-md-12 col-lg-4 m-0">
                <div class="product_left-item colmn">
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-4">
                            <img :src="require('@/assets/ico/dacsan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-8">
                          <h5>{{InfoLang.DacsanVungMien}}</h5>
                          <span class="p">{{InfoLang.textP}}</span>
                          </div>
                    </div>
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/rausach.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                           <h5>{{InfoLang.Rausach}}</h5>
                          <span class="p">{{InfoLang.textP}}</span>
                          </div>
                    </div>
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-4">
                            <img :src="require('@/assets/ico/nongsan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-8">
                           <h5>{{InfoLang.Nongsan}}</h5>
                          <span class="p">{{InfoLang.textP}}</span>
                          </div>
                    </div>
                </div>
            </div>
            <div class="product_center col-md-12 col-lg-4">
                <div class="product_center_bg">
                    <div class="product_center_img">
                      <img :src="require('@/assets/ico/512.png')" alt="">
                    </div>
                </div>
            </div>
            <div class="product_right col-md-12 col-lg-4 ">
                <div class="product_right-item colmn">
                    <div class="product_left-detail row mb-2 p-3">
                        <div class="product_left_detail-img col-5">
                              <img :src="require('@/assets/ico/thuyhaisan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                         <h5>{{InfoLang.ThuyHaiSan}}</h5>
                         <span class="p">{{InfoLang.textP}}</span>
                         </div>
                    </div>
                    <div class="product_left-detail row mb-2 p-3 ">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/thưcan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                          <h5>{{InfoLang.Vattuthucan}}</h5>
                          <span class="p">{{InfoLang.textP}}</span>
                         </div>
                    </div>
                    <div class="product_left-detail row mb-2 p-3">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/tintuc.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                          <h5>{{InfoLang.New}}</h5>
                          <span class="p">{{InfoLang.textP}}</span>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { InfoLang } from '../../Lang/vi/Info'
export default {
  name: 'InfoCenter',
  data () {
    return {
      InfoLang: InfoLang
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
}
.we_are {
  width: 100%;
  height: auto;
  margin: 30px 0;
}
.product{
  color: rgb(35, 107, 7);
  align-items: center;
}
.product-text{
  color: rgb(35, 107, 7);
  font-family: "Poppins", sans-serif;
  padding-bottom:15px;
}
.product_center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.product_center_img{
  background-color: #fff;
   width: 250px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  padding: 30px;
}
.product_center_img img {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.product_left-detail {
  width: 100%;
  height: 200px;
  border: 1px dashed gray;
  border-radius: 10px;
  padding: 15px 0;
}
.product_left_detail-img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}

.product_left_detail-img img {
  width: 100%;
  height: 100%;
  padding: 2px;
}
.product_left_detail-img {
  width: 100%;
}
@media only screen and (max-width: 992px) {
.product_center{
display: none;
  }
}
</style>
