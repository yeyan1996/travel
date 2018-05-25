<template>
<div>
<ul class="Alphabet">
<li  class="aaa" v-for="(item,key) in cities" :key="key">{{key}}</li>

</ul>



</div>

</template>
<script>
export default{
name:"cityAlphabet",
props:{cities:Object}
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.Alphabet{
 /*display:flex;*/
 position:absolute;
 width:.5rem;
 height:3rem
 top:3rem;
 right:0;
 bottom:0;
 font-size:.32rem;
 text-align:center
 color:$contentColor;
}
.aaa{
 margin:.1rem
}
</style>
