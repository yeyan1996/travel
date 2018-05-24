<template>
<div>
<cityHeader></cityHeader>
<citySearch></citySearch>
</div>
</template>

<script>
import cityHeader from "./components/header.vue"
import citySearch from "./components/search.vue"

export default{
name:"city",
components:{
cityHeader,
citySearch
}
}
</script>

<style lang="stylus" scoped>

</style>
