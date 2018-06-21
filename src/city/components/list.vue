<template>
<div class="fix" ref="list">
<div>

<div class="bg">
当前城市
</div>

<div class="container">
<div class="button">{{this.city}}</div>
<div class="clear"></div>
</div>

<div class="bg" >
热门城市
</div>
<ul class="container">
<li class="button" v-for="item in hotCities" :key="item.id"   @click="handleCityClick(item.name)">{{item.name}}</li>
<div class="clear"></div>
</ul>

<ul v-for="(item,key) in cities" :key="key" >
<li class="bg" :ref="key">{{key}}</li>
<li class="bd" v-for="inneritem in item" :key="inneritem.id"  @click="handleCityClick(inneritem.name)" >{{inneritem.name}}</li>

</ul>

</div>
</div>
</template>
<script>
import BScroll from 'better-scroll' // 使用本插件需要让页面锁死
import {mapState, mapMutations, mapActions} from 'vuex'
export default{
  name: 'cityList',
  props: {
    letter: String,
    hotCities: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list, {
      click: true // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
    })
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      this.changeAAsync({
        city: city,
        time: 2000
      })
      this.$router.push('/')
    },
    ...mapMutations(['handlechange']),
    ...mapActions(['changeAAsync'])
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[th is.letter][0])
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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
