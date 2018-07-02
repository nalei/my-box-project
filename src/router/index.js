import Vue from 'vue'
import Router from 'vue-router'
import Fractal from '@/components/fractal/Fractal.vue'
import Reddit from '@/components/reddit/Layout.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Fractal',
      component: Fractal
    },
    {
      path: '/reddit',
      name: 'Reddit',
      component: Reddit
    }
  ]
})
