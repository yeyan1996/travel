<template>
<div >
<ul class="top">热销推荐</ul>


<li class="contain border" v-for="item in lists" :key="item.id">
<img  class="img" :src="item.imgurl" >
<div class="info">
<p class="title">{{item.title}}</p>
<p class="content">{{item.content}}</p>
<button class="btn">查看详情</button>
</div>
</li>


</div>
</template>

<script>
    export default {
        name: "HomeRecommend",
    data (){
        return{
        lists:[
        {id:"001",imgurl:"https://userimg.qunarzz.com/imgs/201501/20/66I5P26rO5z69uk16480.jpg",title:"大连圣亚海洋世界",content:"浪漫大连首站，浪漫的海洋主题公园"},
        {id:"002",imgurl:"https://userimg.qunarzz.com/imgs/201501/20/66I5P26rO5z69uk16480.jpg",title:"大连圣亚海洋世界",content:"浪漫大连首站，浪漫的海洋主题公园"},
        {id:"003",imgurl:"https://userimg.qunarzz.com/imgs/201501/20/66I5P26rO5z69uk16480.jpg",title:"大连圣亚海洋世界",content:"浪漫大连首站，浪漫的海洋主题公园"},
        {id:"004",imgurl:"https://userimg.qunarzz.com/imgs/201501/20/66I5P26rO5z69uk16480.jpg",title:"大连圣亚海洋世界",content:"浪漫大连首站，浪漫的海洋主题公园"},
        ]
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
