<template>
<div class="search">
<input class="searchinput"  placeholder="请输入城市" />
</div>
</template>
<script>



export default {
name: "citySearch"


}

</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search{
 background :$bgColor;
 height:$headerheight;
 padding:0 .15rem;
}
.searchinput{
 padding:.1rem
 text-align:center;
 box-sizing:border-box;
 height:.6rem;
 width:100%;
 background:white;
}
</style>
