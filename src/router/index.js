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

const router = new Router({
  routes: [
      {
        path: '/',
        name: '登录',
        component: login
      },
    {
      path:'/helloworld',
      component:helloworld,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/showstaff',
      component:showstaff,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/showall',
      component:select,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/find',
      component:find,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/operate',
      component:operatable,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/data',
      component:deldata,
      meta:{
        requireAuth:true
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if(localStorage.login=='none'){
      next('/');
    }else{
      next();
    }
  }
  else{
    next();
  }
})
export default router;