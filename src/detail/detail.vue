<template>
  <div>
<banner :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"></banner>
<detailheader></detailheader>
    <div class="content">
      <list :categoryList="categoryList"></list>
    </div>
  </div>
</template>
<script>
import banner from './components/banner.vue'
import detailheader from './components/header'
import list from './components/list'
import axios from 'axios'
export default{
  name: 'detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: []
    }
  },
  components: {
    banner,
    detailheader,
    list
  },
  mounted () { // 这里本应该是actived，但是app.vue的根组件设置了exclude让本组件不设置keep-alive的缓存功能
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(response => {
          if (response.data.ret && response.data.data) {
            this.sightName = response.data.data.sightName
            this.bannerImg = response.data.data.bannerImg
            this.gallaryImgs = response.data.data.gallaryImgs
            this.categoryList = response.data.data.categoryList
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

}
</script>
<style lang="stylus" scoped>
  .content{
    height:50rem
  }
</style>
