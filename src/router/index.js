import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import select from '../components/select'
import find from '../components/find'
Vue.use(Router)

export default new Router({
  routes: [{
      path:'/asasas',
      component:select
    },
    {
      path:'/find',
      component:find
    }
  ]
})
