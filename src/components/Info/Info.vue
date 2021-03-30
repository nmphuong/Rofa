<template>
  <div>
    <InfoTop />
    <InfoCenter />
    <InfoBottom />
  </div>
</template>
<script>
import InfoTop from './InfoTop'
import InfoCenter from './InfoCenter'
import InfoBottom from './InfoBottom'

export default {
  name: 'Info',
  data () {
    return {
    //
    }
  },
  components: {
    InfoTop,
    InfoCenter,
    InfoBottom
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
.we_are {
  width: 100%;
  height: auto;
  margin: 30px 0;
}
</style>
