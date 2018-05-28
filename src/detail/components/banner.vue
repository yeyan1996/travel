
<template>
  <div class="contain">
    <div class="top" @click="handleShowGallary">
      <img class="top-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" >
    </div>
    <div class="info">
      <div class="top-content">大连圣亚海洋世界(AAAA景区)</div>
      <div class="iconfont top-icon">&#xe648; 39</div>
    </div>
    <gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleclose"></gallary>
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary.vue'
import axios from 'axios'
export default {
  name: 'banner',
  data () {
    return {
      gallaryImgs: [],
      showGallary: false
    }
  },
  components: {
    gallary
  },
  mounted () {
    this.getinfo()
  },
  methods: {
    getinfo () {
      axios.get('/api/detail.json')
        .then(response => {
          this.gallaryImgs = response.data.data.gallaryImgs
        })
    },
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
    position: relative
  }

  .top {
    height;
    0
    padding-bottom: 55%
    overflow: hidden
  }

  .top-img {
    width: 100%
  }

  .top-content {
    position: absolute
    bottom: 0
    left: 0
    margin-left: .2rem
    margin-bottom:.1rem
    color:white
    flex:1
  }

  .top-icon{
    position :absolute
    right: 0
    bottom: 0
    font-size:.25rem
    margin-right:.3rem
    color:white
    margin-bottom :.1rem
  }
  .info{
    display :flex
    position absolute
    width:100%;
    height:.4rem;
    bottom:0
    background:linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,0.3))
  }
</style>
