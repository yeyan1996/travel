<template>
  <div >
<HomeHeader></HomeHeader>
  <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from "./components/header.vue"
import HomeSwiper from "./components/Swiper.vue"
export default {
  name: 'home',
components:{
  HomeHeader,
  HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
