import Vue from 'vue'
import Router from 'vue-router'

import city from '@/city/city.vue'
import detail from '@/detail/detail.vue'
import test from '@/test.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/home/home.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: city,
      children: [
        {
          path: 'test',
          name: 'test',
          component: test
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      props: (route) => ({
        id: route.params.id,
        query: route.query
      }),
      beforeEnter: (to, from, next) => {
        console.log('before Enter')
        next()
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  console.log('before Each')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve')
  next()
})
router.afterEach((to, from) => {
  console.log('after Each')
})
export default router
