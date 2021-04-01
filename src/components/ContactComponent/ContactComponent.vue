<template>
  <div class="contact">
    <!--fromlien hệ-->
    <section>
        <div class="row m-0 p-0 py-5">
             <!-- Grid column -->
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <!-- Form contact -->
                        <form>
                            <h2 class="text-center py-4 font-bold font-up danger-text">Liên hệ với chúng tôi</h2>
                            <div class="md-form mb-3">
                                <i class="fa fa-user prefix grey-text"></i>
                                <input type="text" id="form31" class="form-control input-group" placeholder="Họ & Tên">
                            </div>
                            <div class="md-form mb-3">
                                <i class="fa fa-envelope prefix grey-text"></i>
                                <input type="text" id="form21" class="form-control input-group" placeholder="Email">
                            </div>
                            <div class="md-form mb-3">
                                <i class="fa fa-tag prefix grey-text"></i>
                                <input type="text" id="form321" class="form-control input-group" placeholder="Tiêu để">
                            </div>
                            <div class="md-form mb-3">
                                <i class="fa fa-pencil prefix grey-text"></i>
                                <textarea id="" class="w-100 form-control input-group" rows="10" placeholder="Message...."></textarea>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-outline-danger btn-lg">Gửi</button>
                            </div>
                        </form>
                        <!-- Form contact -->
                    </div>
                </div>
            </div>
            <!-- Grid column -->
            <!-- Grid column -->
            <div class="col-md-6 mb-4">
                <div class="card card-text-center form-white h-100">
                    <div class="card-body">
                        <!-- Form contact -->
                        <div class="text-center h-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.200608508366!2d106.71825321533424!3d10.795942061784023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a907675c8b%3A0x6c9e69027f620424!2sLandmark%205!5e0!3m2!1svi!2s!4v1616658155385!5m2!1svi!2s"
                                width="100%" style="border:0; height: 100%" allowfullscreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                        <!-- Form contact -->
                    </div>
                </div>
            </div>
            <!-- Grid column -->
        </div>
    </section>
    <!--from lien hệ-->
  </div>
</template>

<script>
// import { VueEditor } from 'vue2-editor'
export default {
  name: 'Contact',
  data () {
    return {
      //
    }
  },
  components: {
    // VueEditor
  }
}
</script>

<style>
.sline-product {
  width: 100%;
  height: 50px;
  padding-left: 5%;
  background-image: linear-gradient(
    30deg,
    rgb(236, 236, 236) 30%,
    rgba(128, 230, 128, 0.5) 20%,
    rgba(135, 233, 135, 0.5)
  );
  margin-bottom: 10px;
  border-bottom: 1px solid #eeeded;
}

.sline-product > A {
  text-align: center;
  justify-content: center;
  padding-top: 10px;
  font-size: 30px;
  color: #8dc63f;
  text-decoration: none;
}
.input-group {
  border: 2px solid rgb(247 174 174);
  padding: 10px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
}
.card-text-center{
  background-image: linear-gradient(30deg,
    rgb(236, 236, 236) 50%,
    rgba(89, 94, 89, 0.5) 20%,
    rgba(94, 97, 94, 0.5));
}
</style>
