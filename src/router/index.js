import Vue from 'vue'
import Router from 'vue-router'
import von from '@/components/von'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'von',
      component: von
    }
  ]
})
