import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {child} from './child'
const routes=[{
    path: '/',
    name: 'main',
    component: resolve => require(["@/views/main.vue"], resolve),
    meta: { title: '', icon: '' },
    children:child.children
}]

const router=new VueRouter({
    routes
})

export default router