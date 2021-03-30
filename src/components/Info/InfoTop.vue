<template>
  <div>
    <section class="container">
        <div class="we_are row ">
            <div class="we_are-item col-md-4">
                <div class="we_are_item-detail column">
                    <div class="we_are_detail-img">
                        <img src="http://d1f7geppf3ca7.cloudfront.net/origin/194139/1415869545643_188012.jpg">
                    </div>
                    <div class="we_are_detail-text">
                        <h4>Chúng tôi là</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officia debitis in molestiae
                            minima id delectus amet nam ducimus qui, ab expedita. Hic voluptatum ipsum temporibus
                            possimus laboriosam. Alias, ut.</p>
                    </div>
                </div>
            </div>
            <div class="we_are-item col-md-4">
                <div class="we_are_item-detail column">
                    <div class="we_are_detail-img">
                        <img src="https://thucphamdongxanh.com/wp-content/uploads/2019/12/chon-rau-cu-qua-sach-tam-quan-trong.jpeg" alt="">
                    </div>
                    <div class="we_are_detail-text">
                        <h4>Sản phẩm của chúng tôi</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officia debitis in molestiae
                            .</p>
                    </div>
                </div>
            </div>
            <div class="we_are-item col-md-4">
                <div class="we_are_item-detail column">
                    <div class="we_are_detail-img">
                        <img src="https://thuycanhsaigon.net/wp-content/uploads/2018/11/farm-thuy-canh-1024x768.jpg" alt="">
                    </div>
                    <div class="we_are_detail-text">
                        <h4>Công việc của chúng tôi</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officia debitis in molestiae
                            minima id delectus amet nam ducimus qui, ab expedita. Hic voluptatum ipsum temporibus
                            possimus laboriosam. Alias, ut.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Infotop',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
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
.we_are-item {
  padding: 15px;
}
.we_are_detail-img {
  width: 100%;
  height: 50%;
}
.we_are_detail-img > img {
  width: 100%;
  max-height: 250px;
}
.we_are_detail-text {
  text-align: center;
  color: rgb(35, 107, 7);
  padding: 15px;
}
</style>
