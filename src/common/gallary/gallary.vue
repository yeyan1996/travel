<template>
    <div class="contain" @click="handleclose">
      <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide   v-for="(item,index) in gallaryImgs" :key="index">
          <img class="gallery-img" :src="item"  />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'gallary',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination', // 设置下方点状按钮
          type: 'fraction'
        },
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observeParents: true // 将observe应用于Swiper的父元素
      }
    }
  },
  methods: {
    handleclose () {
      this.$emit('close')
    }
  },
  props: {gallaryImgs: Array}

}

</script>

<style scoped>
.contain{
  display:flex;
  position: fixed;
  z-index:1;
  background: black;
  width:100%;
  height:100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  flex-direction: column;
  justify-content: center;
}
.wrapper{
  height:0;
  padding-bottom:100%;
}
.wrapper>>>.swiper-pagination{
  position:absolute;
  bottom:-1.5rem;
  color:white;
  font-size:.4rem;
}

.gallery-img{
  width:100%;
}
  .wrapper>>>.swiper-container{
    overflow:inherit;
  }
</style>
