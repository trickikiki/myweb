import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import select from '../components/select'
import find from '../components/find'
import operatable from '../components/operatable'
Vue.use(Router)

export default new Router({
  routes: [{
      path:'/asasas',
      component:select
    },
    {
      path:'/find',
      component:find
    },
    {
      path:'/operate',
      component:operatable
    }
  ]
})
