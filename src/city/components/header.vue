<template>
<div class="header">
城市选择
<router-link to="/">
<div class="iconfont lefticon">&#xe660;</div>
</router-link>
</div>
</template>
<script>
export default{
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
 .header{
  position:relative;
  line-height:$headerheight;
  background: $bgColor;
  color:white;
  height:$headerheight;
  text-align:center;
 }
  .lefticon {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: .64rem;

  }
</style>
