
// 路由器对象模块
import Vue from 'vue'
import Router from 'vue-router'

import Miste from 'view/Miste/Miste'
import Order from 'view/Order/Order'
import Search from 'view/Search/Search'
import Profile from 'view/Profile/Profile'
import Login from 'view/Login/Login'

// 声明使用插件

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/miste',
    	component:Miste,
        meta: {
            login_require: true
          }
    },
    {
    	path:'/order',
    	component:Order,
        meta: {
            login_require: true
          }
    },
    {
    	path:'/search',
    	component:Search,
        meta: {
            login_require: true
          }
    },
    {
    	path:'/profile',
    	component:Profile,
        meta: {
            login_require: true
          }
    },
    {
        path:'/login',
        component:Login,
        meta: {
            login_require: false
          }
    },
    {
    	path:'/',
    	redirect:'/miste'
    },
  ]
})
