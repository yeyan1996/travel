<template>
  <div class="header">
<div class="header-left"><div class="iconfont">&#xe660;</div></div>
<div class="header-input"><span class="iconfont ">&#xe651;</span>输入城市/景点/游玩主题</div>
<div class="header-right">城市<span class="iconfont right-icon">&#xe65e;</span></div>
  </div>
</template>

<script>
 export default {
    name: 'HomeHeader'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  line-height: .86rem;
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
 width: 1.24rem;
 float:right;
 text-align:center;


.right-icon
 margin-left:.16rem;
 font-size:.24rem;

</style>
