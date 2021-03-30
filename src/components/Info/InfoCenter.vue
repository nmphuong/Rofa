<template>
  <div>
      <div class="container" style="text-align:center">
        <h2 class="product-text">Sản Phẩm</h2>
        <div class=" product row ">
            <div class="product_left col-12 col-sm-4 m-0">
                <div class="product_left-item colmn">
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/dacsan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                          <h4>Đặc Sản</h4>
                          Lorem ipsum dolor sit amet consectetur
                            adipisicingelit. Hic, delectus?</div>
                    </div>
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/rausach.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                           <h4>Rau Sạch</h4>
                          Lorem ipsum dolor sit amet consectetur
                            adipisi
                            elit. Hic, delectus?</div>
                    </div>
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/nongsan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                           <h4>Nông Sản</h4>
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing
                          elit. Hic, delectus?</div>
                    </div>
                </div>
            </div>
            <div class="product_center col-md-4">
                <div class="product_center_bg">
                    <div class="product_center_img">
                      <img :src="require('@/assets/ico/512.png')" alt="">
                    </div>
                </div>
            </div>
            <div class="product_right col-12 col-sm-4 ">
                <div class="product_right-item colmn">
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                              <img :src="require('@/assets/ico/thuyhaisan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                          <h4>Thủy-Hải sản</h4>
                          Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Hic, delectus?</div>
                    </div>
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/thưcan.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                          <h4>Vật Tư Thức Ăn</h4>
                          Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Hic, delectus?</div>
                    </div>
                    <div class="product_left-detail row mb-2">
                        <div class="product_left_detail-img col-5">
                            <img :src="require('@/assets/ico/tintuc.png')" alt="">
                        </div>
                        <div class="product_left_detail-text col-7">
                          <h4>Tin Tức</h4>
                          Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Hic, delectus?</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCenter',
  data () {
    return {
      //
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
.product_center_bg {
  background-image: url("https://sites.google.com/site/dailytraicaybinhvui/_/rsrc/1406108725813/home/1511028_252336741598733_1107758098_n.jpg");
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 100%;
  border: 1px dashed gray;
  border-radius: 10px;
  padding: 0 10px;
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
</style>
