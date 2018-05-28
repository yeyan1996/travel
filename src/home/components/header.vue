<template>
  <div class="header">
<div class="header-left"><div class="iconfont">&#xe660;</div></div>
<div class="header-input"><span class="iconfont ">&#xe651;</span>输入城市/景点/游玩主题</div>
<router-link to="/city">
<div class="header-right">{{this.currentCity}}<span class="iconfont right-icon">&#xe65e;</span></div>
</router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({currentCity: 'city'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  line-height: $headerheight;
  display:flex;
  background: $bgColor;
  color:white;

.header-left
 width: .64rem;
 float: left;
 text-align: center;

.header-input
 flex:1;
 background:white;
 height:.5rem;
 color:grey;
 margin-top:.18rem;
 border-radius:.1rem;
 line-height:.5rem;
 padding-left:.2rem;

.header-right
 padding:0 .1rem;
 float:right;
 text-align:center;
 color:white;

.right-icon
 margin-left:.16rem;
 font-size:.24rem;

</style>
