import Vue from 'vue'
import Router from 'vue-router'
import Logs from '@/components/Logs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Logs',
      component: Logs
    }
  ]
})
