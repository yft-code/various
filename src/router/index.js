import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import {child} from './child'
const routes=[
    {
        path: '/',
        redirect: '/login'
      },
      {
        path: '/login',
        component: resolve => require(['@/views/login/index'], resolve),
        hidden: true
      },
    
//     {
//     path: '/',
//     name: 'main',
//     component: resolve => require(["@/views/main.vue"], resolve),
//     meta: { title: '', icon: '' },
//     children:child.children
// }
]
const createRouter = () => new Router({
    routes: routes
})
const router = createRouter()
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // 新路由实例matcer，赋值给旧路由实例的matcher，（相当于replaceRouter）
    router.options.routes = []
  }
// 全局导航守卫

export default router