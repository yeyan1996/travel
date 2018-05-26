<template>
<div >
<ul class="top">周末去哪儿</ul>

<li class="contain border" v-for="item in weekendList" :key="item.id">
<img  class="img" :src="item.imgUrl" >
<div class="info">
<p class="title">{{item.title}}</p>
<p class="content">{{item.desc}}</p>
</div>
</li>

</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {weekendList: Array},
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.contain {
margin-right: 5px;
list-style :none;

}

.top {
padding: 0.3rem;
background: #ebebeb;
}

.img {
height: 100px ;
width: 100% ;
}

.info {

padding: .2rem;
min-width: 0; //设置min-width:0才可以配合ellipsis（）实现文字溢出的....效果
}

.title {
font-weight: bold;
font-size: .35rem;
}

.content {
padding: .2rem 0;
color: #9e9e9e
ellipsis()

}

.btn {
position: relative;
background: orangered;
padding: .1rem;
color: white;
font-weight: bold;
border-radius: 0.1rem;
top: .4rem;
}
</style>
