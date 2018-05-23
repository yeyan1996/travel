<template>
<div class="icon">
<swiper >                                        <!--设置轮播图下面的小点-->
<!-- slides -->

<swiper-slide v-for="(page,index) in pages" :key="index" >         <!--循环语句写在swiper-slide上表示每一页的具体内容-->
<div class="iconblock"  v-for="item in page" :key="item.id">       <!--循环语句写在div上表示当前页的具体内容-->
<div class="icon-contain-img">
<img class="icon-img" :src="item.imgurl" />
</div>
<div class="content">{{item.content}}</div>
</div>
</swiper-slide>
</swiper>





</div>



</template>

<script>
export default{
 name:"HomeIcon",
data (){
 return{
 iconlists:[
 {id:"001",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"热门景点门景点门景点门景点门景点门景点门景点门景点门景点门景点门景点门景点门景点门景点门景点"},
 {id:"002",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"温泉"},
 {id:"003",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"旅游"},
 {id:"004",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"景点门票"},
 {id:"005",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"景点门票"},
 {id:"006",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"热门景点"},
 {id:"007",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"热门景点"},
 {id:"008",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"热门景点"},
 {id:"009",imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=27&gp=0.jpg",content:"热门景点"},
 ]
 }
},
computed:{
 pages:function(){
 const pages=[];
 this.iconlists.forEach(function(item,index){
 const page= Math.floor(index / 8);
 if(!pages[page]){pages[page]=[]}
 pages[page].push(item)
 })
 return pages
 }
}
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.icon>>>.swiper-container
 overflow :hidden
 height:0
 padding-bottom: 50%
.icon-img {
position: relative;
height: 100%;
width:100%;
}
 .icon
  margin:.1rem
  overflow :hidden
  height:0
  padding-bottom: 50%
  .iconblock
   overflow :hidden
   position :relative
   float:left
   width:25%;
   padding-bottom : 25%
  .icon-contain-img
   box-sizing : border-box
   position :absolute
   width:100%
   height:75%
   padding:5%
  .content
   position:absolute
   color:$contentColor
   text-align:center
   left:0
   right:0
   bottom:0
   ellipsis()

</style>
