<template>
<div class="wrapper">
<swiper :options="swiperOption">
<!-- slides -->

<swiper-slide   v-for="item in swiperlist" :key="item.id">         <!--循环语句写在swiper-slide上-->
<img class="swiper-img" :src="item.urlimg"  >
</swiper-slide>
<div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</div>
</template>

<script>
export default {
name: 'HomeSwiper',
data () {
return {
swiperlist: [{
id: '001',
urlimg: '//img1.qunarzz.com/vc/c1/c3/4f/7cd9da5aadf1c5b15cdbe11424.jpg'
}, {
id: '002',
urlimg: '//img1.qunarzz.com/vc/18/ec/c3/f51767d45459eae72cf32d9b37.jpg'
}],
swiperOption: {
pagination: {
el: '.swiper-pagination'
},
loop: true
}
}
}

}

</script>
<style lang="stylus"  scoped>
.wrapper >>>.swiper-pagination-bullet-active
 background : white;
.swiper-img
 width:100%;
.wrapper
 width:100%
 height:0;
 overflow:hidden;
 padding-bottom:30.39%;
 background :grey;


</style>
