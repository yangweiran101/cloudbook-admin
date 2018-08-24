import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:index
    },
    {
      path: '/layout',
      component: () => import('@/layout/layout'),
      children:[
        {
          path:'user',
          component: () => import('@/pages/user')
        },
        {
          path:'adduser',
          component: () => import('@/pages/adduser')
        }
      ]
    }
  ]
})
