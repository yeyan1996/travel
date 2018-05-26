<template>
<div class="wrapper">
<swiper :options="swiperOption">
<!-- slides -->

<swiper-slide   v-for="item in swiperList" :key="item.id">
<img class="swiper-img" :src="item.imgUrl"  >
</swiper-slide>
<div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {swiperList: Array},
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination' // 设置下方点状按钮
        },
        autoplay: true, // 设置自动播放
        loop: true // 设置循环
      }
    }
  }

}

</script>
<style lang="stylus"  scoped>
.wrapper >>>.swiper-pagination-bullet-active
 background : white
.swiper-img
 width:100%
.wrapper
 width:100%
 height:0
 overflow:hidden
 padding-bottom:30.39%
 background :grey

</style>
