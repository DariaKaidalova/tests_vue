import Vue from 'vue'
import Router from 'vue-router'
import SectionsPage from '@/components/SectionsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SectionsPage',
      component: SectionsPage
    }
  ]
})
