<template>
  <div class='right__content w-100'>
    <div class='right__title'>Thông tin tài khoản</div>
    <div class='right__table'>
      <div class='right__tableWrapper row'>
        <div class='right__formWrapper col-md-6'>
          <form action='' method='post'>
            <div class='right__inputWrapper'>
              <label for='name'>Tên Doanh nghiệp</label>
              <div class="row">
              <div class="col-md-6">
              <input  type='text' placeholder='Tên admin' v-model="lastName" />
                </div>
                <div class="col-md-6">
              <input type='text' placeholder='Tên admin' v-model="firstName" />
                </div>
              </div>
            </div>
            <div class='right__inputWrapper'>
              <label for='name'>Tên Đăng nhập</label>
              <span>{{ userName }} </span>
            </div>
             <div class='right__inputWrapper'>
              <label for='revernue'>Doanh thu</label>
              <span class="revernue">{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dataSeller.total_revenue)}}</span>
            </div>
            <!-- ------------------------ -->
            <div class="m-0 p-0 col-12">
              <div class="row p-0 m-0">
                <div class="div-top col-12">
                  <div class="row">
                    <div class="head col-12 p-0 pt-2 pb-2 d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <label for="upload-photo" id="addPhoto" class="text-primary"><b-icon-plus></b-icon-plus> Chọn ảnh đại diện mới</label>
                        <input type="file" @change="addPhotoChange" name="photo" id="upload-photo" style="opacity: 0;position: absolute;z-index: -1;" />
                      </div>
                    </div>
                  </div>
                </div>
                <span class='text-danger' v-if="errors.first('add_photos')">{{ errors.first('add_photos') }}</span>
                <div class="div-content col-12 p-0">
                  <div class="row p-0 m-0">
                    <div :class="['p-0', 'p-2', (index === 0 ? 'col-12' : 'col-4')]" v-for="(image, index) in images" v-bind:key="index">
                        <span>Ảnh đại diện mới</span>
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
            <!-- -------------- -->
            <div class='right__inputImageReview'>
              <span>Ảnh đại diện hiện tại</span>
             <div class='img-input' :style="{backgroundImage: 'url(' + background + ')'}">
        </div>
            </div>
          </form>
        </div>
        <div class='right__formWrapper col-md-6'>
          <form action='' method='post'>
            <div class='right__inputWrapper'>
              <label for='email'>Email</label>
              <span>{{ email }}</span>
            </div>
            <div class='right__inputWrapper'>
              <label for='password'>Số Điên Thoại</label>
              <input type='number' placeholder='Số điện thoại' v-model="phone"/>
            </div>
             <div class='right__inputWrapper'>
              <label for='name'>Địa chỉ</label>
              <input type='text' placeholder='Cập nhật địa chỉ' v-model='location' />
            </div>
            <div class='right__inputWrapper'>
              <label for='name'>Mô tả</label>
              <textarea
                id=''
                class='w-100 form-control input-group'
                rows='10'
                placeholder='Mô tả'
                v-model='description'
              ></textarea>
            </div>
          </form>
        </div>
        <div class='capnhat w-100'>
          <div class="row p-0 m-0 py-2 justify-content-center">
            <button class='btn w-25 text-white' type='submit' @click="updateInfoaccound">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
      <div>
        <b-modal centered v-model="modalShow" hide-footer hide-header no-close-on-backdrop>
          <p class="mb-1 h1 color-main">
            <b-icon-check-circle-fill></b-icon-check-circle-fill>
          </p>
          <p class="m-0">
            Cập nhật thành công
          </p>
        </b-modal>
      </div>
  </div>
</template>

<script>
export default {
  props: [
    'dataSeller'
  ],
  name: 'Account',
  data () {
    return {
      firstName: this.dataSeller.firstname,
      lastName: this.dataSeller.lastname,
      userName: this.dataSeller.username,
      background: this.dataSeller.url_avatar,
      email: this.dataSeller.email,
      phone: this.dataSeller.phone,
      location: this.dataSeller.location,
      description: this.dataSeller.description,
      dataImg: null,
      images: [],
      modalShow: false
    }
  },
  // v-model là đem dữ liệu từ trên input mình nhập vào xuống biến tương ứng trong data
  methods: {
    // Function này là để update account
    async updateInfoaccound () {
      if (confirm('Bạn có muốn cập nhật lại thông tin?')) { // Hiện alert xác nhận là có muốn cập nhật không
        var data = {} // Object để gửi qua bên backend
        if (this.firstName !== this.dataSeller.firstname) { // Nếu dữ liệu không thay đổi thì không đưa vào object
          data.firstname = this.firstName // So sánh từ input với dữ liệu gốc là dataSeller ở props
        }
        if (this.lastName !== this.dataSeller.lastname) {
          data.lastname = this.lastName
        }
        if (this.images.length !== 0) {
          data.url_avatar = this.dataImg
        }
        if (this.email !== this.dataSeller.email) {
          data.email = this.email
        }
        if (this.phone !== this.dataSeller.phone) {
          data.phone = this.phone
        }
        if (this.location !== this.dataSeller.location) {
          data.location = this.location
        }
        if (this.description !== this.dataSeller.description) {
          data.description = this.description
        }
        // Gọi tới function updateAccount trong file seller của thư mục store
        await this.$store.dispatch('seller/updateAccount', data).then(async (result) => {
          // Nếu trả về success
          this.modalShow = true // Hiện modal Success
          await this.$parent.getInfo() // Gọi lại function getInfo bên parent tức là bên file SellerComponent.vue
          setTimeout(() => { // Sau 3s ẩn modal success
            this.modalShow = false
          }, 2000)
        }).catch((e) => {
        })
      }
    },
    addPhotoChange (e) { // Nhận ảnh từ input khi có sự kiện change
      var files = e.target.files || e.dataTransfer.files
      this.filePhotos = files
      if (!files.length) {
        return
      }
      this.createImages(files)
    },
    async createImages (files) { // Khỏi tạ image
      var vm = this // Đặt biên vm là this vì vô trong reader.onload = function (event) { sẽ không sài được this ở ngoài khi gọi
      for (var index = 0; index < files.length; index++) { // this trong đây thì nó sẽ là this của reader.onload = function (event) {
        var reader = new FileReader()
        reader.onload = function (event) {
          const imageUrl = event.target.result
          vm.images.push(imageUrl)
        }
        let file = files[index]
        await reader.readAsDataURL(files[index])
        reader.onloadend = async () => {
          vm.dataImg = file
        }
      }
    },
    removeImages (index) { // Remove ảnh
      this.images.splice(index, 1)
      this.dataImg = null
      this.images = []
    }
  },
  watch: { // Xem
    dataSeller () { // Nếu dataSeller ở props có thay đổi thì nó thực hiện trong function này nhé
      this.firstName = this.dataSeller.firstname
      this.lastName = this.dataSeller.lastname
      this.userName = this.dataSeller.username
      this.background = this.dataSeller.url_avatar
      this.email = this.dataSeller.email
      this.phone = this.dataSeller.phone
      this.location = this.dataSeller.location
      this.description = this.dataSeller.description
      this.dataImg = null
      this.images = []
    }
  }
}

</script>

<style>
.right__formWrapper {
  align-items: center
}
.img-input{
  width: 100%;
  height:300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.revernue{
  font-size: 20px;
  font-weight: bold;
}
.capnhat {
width: 100%;
height: 50px;
direction: flex;
justify-content: center;
align-items: center;
}
.modal-content {
  background-color: #0000007d;
  border: none;
  color: #fff;
  text-align: center;
  padding: 2em 0em;
}
</style>
