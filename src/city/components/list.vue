<template>
<div class="fix" ref="list">
<div>

<div class="bg">
当前城市
</div>

<div class="container">
<div class="button">北京</div>
<div class="clear"></div>
</div>



<div class="bg">
热门城市
</div>
<ul class="container">
<li class="button" v-for="item in hotCities" :key="item.id">{{item.name}}</li>
<div class="clear"></div>
</ul>


<ul v-for="(item,key) in cities" :key="key">
<li class="bg">{{key}}</li>
<li class="bd" v-for="inneritem in item" :key="inneritem.id">{{inneritem.name}}</li>

</ul>





</div>
</div>
</template>
<script>
import BScroll from 'better-scroll'            //使用本插件需要让页面锁死
export default{
name:"cityList",
props:{
hotCities:Array,
cities:Object
},
mounted () {
  const scroll= new BScroll(this.$refs.list)
}
}
</script>
<style lang="stylus" scoped>
.bg{
 padding: .1rem;
 background :#bababa;
}
.button{
 float:left;
 box-sizing:border-box;
 text-align:center;
 width:30%;
 border:.05rem solid #bababa;
 padding:.1rem
 margin:.08rem
}
.container{
 padding:.1rem;
}
.clear{
 clear:both
}

.bd{
 padding:.2rem;
 line-height:.5rem
 border-bottom:1px solid #bababa;
}

.fix{                    //页面锁死
 overflow :hidden;
 position:absolute
 top:1.72rem;
 left:0;
 right:0;
 bottom:0
}
</style>
