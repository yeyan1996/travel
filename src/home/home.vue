<template>
<div>
<HomeHeader :city="city"></HomeHeader>
<HomeSwiper :swiperList="swiperList"></HomeSwiper>
<HomeIcon :iconList="iconList"></HomeIcon>
<HomeRecommend :recommendList="recommendList"></HomeRecommend>
<HomeWeekend :weekendList="weekendList"></HomeWeekend>
</div>
</template>

<script>
import HomeHeader from "./components/header.vue"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcon from "./components/icon.vue"
import HomeRecommend from "./components/recommend"
import HomeWeekend from "./components/weekend.vue"
import axios from "axios"

export default {
name: 'home',
data() {
return {
city: "",
swiperList: [],
iconList: [],
recommendList: [],
weekendList: []
}
},
components: {
HomeHeader,
HomeSwiper,
HomeIcon,
HomeRecommend,
HomeWeekend
},
mounted() {
this.getinfo();
this.getCityName()
},
methods: {
getCityName() {
axios.get('/api/city.json')                //在comfig/index.js中使用代理功能指向本地的static路径
.then(response => {
this.city = response.data.data.hotCities[0].name;
}
)
.catch(function (error) {
console.log(error);
});
},
getinfo() {
axios.get('/api/index.json')
.then(response => {
this.swiperList = response.data.data.swiperList;
this.iconList = response.data.data.iconList;
this.recommendList = response.data.data.recommendList;
this.weekendList = response.data.data.weekendList;
}
)
.catch(function (error) {
console.log(error);
});
}

}






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
