<template>
<div >
<ul class="top">热销推荐</ul>

<router-link tag="a" :to="'/detail/' + item.id" class="contain border" v-for="item in recommendList" :key="item.id" >
<img  class="img" :src="item.imgUrl" >
<div class="info">
<p class="title">{{item.title}}</p>
<p class="content">{{item.desc}}</p>
<button class="btn">查看详情</button>
</div>
</router-link>

</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {recommendList: Array},
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
 .contain{
  display:flex;
  padding:.3rem;
 }
 .top{
  padding:0.3rem;
  background: #ebebeb;
 }
 .img {
 height: 2rem;
 width: 2rem;
 }
  .info {
  flex: 1;
  padding: 0 .2rem;
  min-width:0;                    //设置min-width:0才可以配合ellipsis（）实现文字溢出的....效果
  }
.title{
 font-weight:bold;
 font-size:.35rem;
}
.content{
 padding:.2rem 0;
 color: #9e9e9e
 ellipsis()

}
.btn{
 position:relative;
 background:orangered;
 padding:.1rem;
 color:white;
 font-weight:bold;
 border-radius:0.1rem;
 top:.4rem;
}
</style>
