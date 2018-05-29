<template>
   <transition>
     <slot></slot>
   </transition>
</template>

<script>
export default {
  name: 'fade'
}
</script>
<style scoped>
.v-enter{
  opacity:0;
}
  .v-enter-active{
    transition:all .5s;
  }
  .v-leave-to{
    opacity:0
  }
  .v-leave-to{
    transition:all .5s
  }
</style>
