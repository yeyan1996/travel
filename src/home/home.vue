<template>
  <div >
<HomeHeader></HomeHeader>
  <HomeSwiper></HomeSwiper>
<HomeIcon></HomeIcon>
<HomeRecommend></HomeRecommend>
  <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from "./components/header.vue"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcon from "./components/icon.vue"
import HomeRecommend from "./components/recommend"
import HomeWeekend from "./components/weekend.vue"
export default {
  name: 'home',
components:{
  HomeHeader,
  HomeSwiper,
  HomeIcon,
  HomeRecommend,
  HomeWeekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
