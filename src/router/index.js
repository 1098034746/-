import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//项目组件开始
import Index from '../views/Index'
import Login from '../views/Login'
import Seting from '../views/Seting'
import Oder from '../views/Oder'
import AdressList from '../views/AdressList'
import Register from '../views/Register'
//项目组件结束

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Index
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/adresslist',
    component:AdressList
  },
  {
    path:'/oder',
    component:Oder
  },
  {
    path:'/seting',
    component:Seting
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
