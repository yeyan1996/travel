<template>
<div class="search">
<input class="searchinput"  v-model="msg" placeholder="请输入城市" />
  <div  class="resultlist" ref="search" v-show="msg">
  <ul>
  <li v-for=" item in list" class="searchinfo border" :key="item.id" @click="handleCityChange(item.name)">{{item.name}}</li>
    <li class="searchinfo border" v-show="hasNoData">没有找到匹配数据</li>
  </ul>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapActions} from 'vuex'
export default {
  name: 'citySearch',
  props: {cities: Object},
  data () {
    return {
      msg: '',
      list: [],
      Timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {
      click: true // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
    })
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityChange (city) {
      this.handlechange(city)
      this.$router.push('/')
    },
    ...mapActions(['handlechange'])
  },
  watch: {
    msg () {
      if (!this.msg) {
        this.list = []
        return
      }
      if (this.Timer) { clearTimeout(this.Timer) }
      this.Timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(
            (item) => {
              if (item.spell.indexOf(this.msg) > -1 || item.name.indexOf(this.msg) > -1) { result.push(item) }
            }
          )
        }
        this.list = result
      }, 100)
    }
  }

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
 margin:.1rem 0;
 text-align:center;
 box-sizing:border-box;
 height:.6rem;
 width:100%;
 background:white;
}

.resultlist {
    position: absolute;
    line-height:.5rem
    border-bottom: 1px solid #bababa;
    width: 100%;
    left: 0;
    top:1.72rem;
    right:0;
    bottom:0;
    z-index: 1;
    background #e2e2e2;
    overflow:hidden;
}
.searchinfo {
  background : white;
  padding:.2rem;
  line-height:.5rem;
  }
</style>
