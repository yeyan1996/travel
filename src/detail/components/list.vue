<template>
<div>
  <div class="list" v-for="(item,index) in categoryList" :key="index">
    <div class="border-bottom contain">
      <div class="img"></div>
      {{item.title}}
      <div v-if="item.children" class="children">
      <list :categoryList="item.children"></list>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'list',
  props: {categoryList: Array}
}
</script>
<style scoped>
  .list{

  }
  .children{
    margin-left:.25rem
  }
  .contain{
    margin:.2rem 0;
    line-height:.8rem;
  }
  .img{
    position:relative;
    top:.08rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem
  }
</style>
