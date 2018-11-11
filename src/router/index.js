import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import select from '../components/select'
import find from '../components/find'
import operatable from '../components/operatable'
import deldata from '../components/deldata'
Vue.use(Router)

export default new Router({
  routes: [{
      path:'/showall',
      component:select
    },
    {
      path:'/find',
      component:find
    },
    {
      path:'/operate',
      component:operatable
    },
    {
      path:'/data',
      component:deldata
    }
  ]
})
