import Router from 'vue-router'
import Vue from 'vue'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
//同步引入,首页一般同步
import home from '../components/home'

const router = new Router ({
  //不用hash值，连接没有#,一般不用
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      name: 'home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about/:id',
      name: '详情',
      meta: {
        title: '详情1'
      },
      //异步引入，会请求
      component: () => import('../components/about')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('../components/login')
    },
    {
      path: '/main',
      component: () => import('../views/layout'),
      redirect: '',
      children: [
        {
          //不加/说明匹配到/main/home
          path: 'home',
          component: home,
          name: 'home1',
          meta: {
            title: '首页'
          }
        },
        {
          path: 'about/:id',
          name: 'detail',
          meta: {
            title: '详情'
          },
          //异步引入，会请求
          component: () => import('../components/about')
        },
        {
          path: 'login',
          name: 'login1',
          meta: {
            title: '登录'
          },
          component: () => import('../components/login')
        },
        {
          path: 'vuexDemo',
          component: () => import('../components/vuexDemo')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})
export default router
