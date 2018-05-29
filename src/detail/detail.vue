<template>
  <div>
<banner></banner>
<detailheader></detailheader>
    <div class="content"></div>
  </div>
</template>
<script>
import banner from './components/banner.vue'
import detailheader from './components/header'
export default{
  name: 'detail',
  components: {
    banner,
    detailheader
  }
}
</script>
<style lang="stylus" scoped>
  .content{
    height:50rem
  }
</style>
