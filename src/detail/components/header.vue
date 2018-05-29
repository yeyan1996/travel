<template>
    <div>
      <router-link tag="div" to="/" class="contain" v-show="showbtn">
        <div class="icon iconfont" >
          &#xe660;
        </div>
      </router-link>
      <div class="header" v-show="!showbtn" :style="showOpacity">
        <router-link to="/">
        <div class="iconfont lefticon">
          &#xe660;
        </div>
      </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'detailheader',
  data () {
    return {
      showbtn: true,
      showOpacity: {opacity: 0}
    }
  },
  activated () {
    window.addEventListener('scroll', this.getScroll)
  },
  methods: {
    getScroll () {
      let top = document.documentElement.scrollTop
      if (top > 0 && top < 100) {
        this.showbtn = false
        this.showOpacity.opacity = top / 100
      } else if (top > 100) {
        this.showbtn = false
        this.showOpacity.opacity = 1
      } else {
        this.showbtn = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.contain{
  position:absolute;
  background:black;
  top:.2rem;
  left:.2rem;
  border-radius:4rem;
  width:.7rem;
  height:.7rem;
  line-height:.7rem;
  opacity: .7;
  text-align:center;
}
  .icon{
    font-size:.4rem;
    color:white;
  }
  .header{
    top:0;
    width:100%;
    position:fixed;
    line-height:$headerheight;
    background: $bgColor;
    color:white;
    height:$headerheight;
    text-align:center;
  }
  .lefticon {
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    width: .64rem;
  }
</style>
