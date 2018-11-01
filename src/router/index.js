import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import select from '../components/select'
Vue.use(Router)

export default new Router({
  routes: [{
      path:'/table',
      component:select
    }
  ]
})
