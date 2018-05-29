
<template>
  <div class="contain">
    <div class="top" @click="handleShowGallary">
      <img class="top-img" :src="bannerImg" >
    </div>
    <div class="info">
      <div class="top-content">{{sightName}}</div>
      <div class="iconfont top-icon">&#xe648; {{bannerImgs.length}}</div>
    </div>
    <gallary :gallaryImgs="bannerImgs" v-show="showGallary" @close="handleclose"></gallary>
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary.vue'
export default {
  name: 'banner',
  props: {sightName: String, bannerImg: String, bannerImgs: Array},
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    gallary
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleclose () {
      this.showGallary = false
    }
  }
}

</script>
<style lang="stylus" scoped>
  .contain {
    position: relative;
  }

  .top {
    height:0;
    padding-bottom: 55%;
    overflow: hidden;
  }

  .top-img {
    width: 100%;
  }

  .top-content {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: .2rem;
    margin-bottom:.1rem;
    color:white;
    flex:1;
  }

  .top-icon{
    position :absolute;
    right: 0;
    bottom: 0;
    font-size:.25rem;
    margin-right:.3rem;
    color:white;
    margin-bottom :.1rem;
  }
  .info{
    display :flex;
    position absolute;
    width:100%;
    height:.4rem;
    bottom:0;
    background:linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,0.3));
  }
</style>
