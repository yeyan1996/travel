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
  props: ['id', 'query'],
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

  methods: {
    getInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.id
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
  },
  mounted () {
    console.log('mounted')
    this.getInfo()
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  activated () {
    console.log('activated')
  },

  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    // next(vm => {
    //   vm.getInfo()
    //   console.log('this id =', vm.id)
    // })
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    // this.getInfo()
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    if (confirm('are you sure')) {
      next()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .content{
    height:50rem
  }
</style>
