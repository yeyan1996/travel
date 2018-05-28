<template>
<div>
<HomeHeader ></HomeHeader>
<HomeSwiper :swiperList="swiperList"></HomeSwiper>
<HomeIcon :iconList="iconList"></HomeIcon>
<HomeRecommend :recommendList="recommendList"></HomeRecommend>
<HomeWeekend :weekendList="weekendList"></HomeWeekend>
</div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcon from './components/icon.vue'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader, // 等同于HomeHeader(组建的标签名) : HomeHeader (引入的组件名)
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getinfo()
    this.lastCity = this.city
  },
  activated () {
    if (this.city !== this.lastCity) {
      this.getinfo()
      this.lastCity = this.city
    }
  },
  methods: {
    getinfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(response => {
          this.swiperList = response.data.data.swiperList
          this.iconList = response.data.data.iconList
          this.recommendList = response.data.data.recommendList
          this.weekendList = response.data.data.weekendList
        }
        )
        .catch(function (error) {
          console.log(error)
        })
    }

  },
  computed: {
    ...mapState(['city'])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
