import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home.vue'
import city from '@/city/city.vue'
import detail from '@/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
      // component: () => import(/* webpackChunkName: "a" */ '@/home/home.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: city
      // component: () => import(/* webpackChunkName: "b" */ '@/city/city.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
      // component: () => import(/* webpackChunkName: "c" */ '@/detail/detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
