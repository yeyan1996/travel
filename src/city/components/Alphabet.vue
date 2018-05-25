<template>
<div>
<ul class="Alphabet">
<li  class="aaa" v-for="item in letters" :key="item" :ref="item" @click="handleclick" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">{{item}}</li>

</ul>



</div>

</template>
<script>
export default{

name:"cityAlphabet",
data (){
return{
touchStatus:false,
  startY:0,
  Timer:null

}
},
  updated (){                    //当ajax的数据被渲染之后执行updated的函数
  this.startY=this.$refs["A"][0].offsetTop
  },
props:{cities:Object},
computed:{
letters (){
const letters=[];
for(let i in this.cities){letters.push(i)}
return letters
}
},
methods:{
handleclick (e){
this.letter=e.target.innerText;
this.$emit("change",this.letter)
},
touchstart (){
this.touchStatus=true
},
touchmove (e){
if(this.touchStatus){
  if(this.Timer){clearTimeout(this.Timer)}
  this.Timer=setTimeout(()=>{
const touchY=e.touches[0].clientY-86-this.startY;
   const index=  Math.floor(touchY/20);
  if(index>= 0&&index<= this.letters.length){
    this.$emit("change",this.letters[index])
  }},16)
// console.log(this.$refs[][0].offsetTop)
}
},
touchend (){
this.touchStatus=false
},
}
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.Alphabet {
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
}
    .aaa {
      line-height: .4rem
      text-align: center
      color: $contentColor
    }
</style>
