import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import select from '../components/select'
import find from '../components/find'
import operatable from '../components/operatable'
import deldata from '../components/deldata'
import helloworld from '../components/helloworld'
import showstaff from '../components/showstaff'




Vue.use(Router)

const login = resolve => require(['@/components/login'], resolve)

export default new Router({
  routes: [
      {
        path: '/',
        name: '登录',
        component: login
      },
    {
      path:'/helloworld',
      component:helloworld
    },
    {
      path:'/showstaff',
      component:showstaff
    },
    {
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
