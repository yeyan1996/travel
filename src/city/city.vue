<template>
<div>
<cityHeader></cityHeader>
<citySearch></citySearch>
<cityList :hotCities="hotCities" :cities="cities" :letter="letter"></cityList>
<cityAlphabet :cities="cities" @change="handlechange"></cityAlphabet>
</div>
</template>

<script>
import axios from "axios"
import cityHeader from "./components/header.vue"
import citySearch from "./components/search.vue"
import cityList from "./components/list.vue"
import cityAlphabet from "./components/Alphabet.vue"
export default{
name:"city",
data (){
return{
cities:{},
hotCities:[],
letter:""
}
},
components:{
cityHeader,
citySearch,
cityList,
cityAlphabet
},
mounted (){
this.getinfo()
},
methods:{
handlechange (value){
this.letter=value;
},
getinfo (){
axios.get("/api/city.json")
.then(response=>{
this.hotCities=response.data.data.hotCities
this.cities=response.data.data.cities
})
}
},
}
</script>

<style lang="stylus" scoped>

</style>
