import router,{resetRouter} from "../router";
// 全局前置守卫:router.beforeEach
// to: 即将要进入的目标 用一种标准化的方式
// from: 当前导航正要离开的路由 用一种标准化的方式
// 参数打印一下就看出来了
// 遇到问题  Vue Router导航守卫报错：Maximum call stack size exceeded  判断条件不对
// 
// 步骤：1.首先判断登录的路由是否是登录页，是的话判断是否有token,有toten和无token的操作
//       2.如果登录的不是首页,判断是否有token,有toten和无token的操作
import store from '../store'
console.log('12312312',store);
const children=[
        {
        path: "/cities",
        name: "cities",
        meta: { title: '首页', icon: '', buttons:['add','edit','export'] },
        component: resolve => require(["@/views/cities/index.vue"], resolve)
    },
    {   path:'/webscoket',
        name: "webscoket",
        meta: { title: 'webscoket', icon: '' },
        component: resolve => require(["@/views/webscoket/index.vue"], resolve)
    },
    {   path:'/托拽',
        name: "托拽",
        meta: { title: '拖拽时间轴', icon: '' },
        component: resolve => require(["@/views/拖动的时间轴/index.vue"], resolve)
    },
    {   path:'/video',
        name: "video",
        meta: { title: '视频流', icon: '' },
        component: resolve => require(["@/views/video/index.vue"], resolve)
    },
    {
        path: "/sendMsg",
        name: "sendMsg",
        meta: { title: "组件通信方式", icon: "" },
        component: resolve => require(["@/views/ai/aiIndex/index"], resolve),
        children: [
        { 
            path:'/vuex',
            name: "vuex",
            meta: { title: 'vuex', icon: '' },
            component: resolve => require(["@/views/vuex/index.vue"], resolve)
        },
        {
        path:'/on',
        name: "on",
        meta: { title: '父子传值', icon: '' },
        component: resolve => require(["@/views/on/index.vue"], resolve)
    },
        ],
      },
    {   path:'/selfAdapting',
        name:"selfAdapting",
        meta: { title: '自适应', icon: '' },
        component: resolve => require(["@/views/selfAdapting/index.vue"], resolve)
    },
    {   path:'/tree',
        name:"tree",
        meta: { title: '数据处理', icon: '' },
        component: resolve => require(["@/views/tree/index.vue"], resolve)
    },
    {   path:'/map',
    name:"map",
    meta: { title: '高德地图', icon: '' },
    component: resolve => require(["@/views/map/index.vue"], resolve)
},
    {   path:'/svg',
        name:"svg",
        meta: { title: 'svg', icon: '' },
        component: resolve => require(["@/views/svg/index.vue"], resolve)
    },
    {   path:'/imgLoad',
    name:"imgLoad",
    meta: { title: '图片懒加载', icon: '' },
    component: resolve => require(["@/views/imgLoad/index.vue"], resolve)
},
{   path:'/virtualList',
name:"virtualList",
meta: { title: 'virtual List', icon: '' },
component: resolve => require(["@/views/virtualList/index.vue"], resolve)
},
    {   path:'/3d',
    name:"3d轮播图",
    meta: { title: '3d轮播图', icon: '' },
    component: resolve => require(["@/views/3d/index.vue"], resolve)
},
    {   path:'/axios',
    name:"axios",
    meta: { title: 'axios', icon: '' },
    component: resolve => require(["@/views/axios/index.vue"], resolve)
},
{   path:'/eventBus',
name:"eventBus",
meta: { title: 'eventBus', icon: '' },
component: resolve => require(["@/views/eventBus/index.vue"], resolve)
},
    {   path:'/addMultity',
        name:"addMultity",
        meta: { title: '批量添加', icon: '' },
        component: resolve => require(["@/views/batch/index.vue"], resolve)
    },
    {   path:'/downLoad',
        name:"downLoad",
        meta: { title: '下载', icon: '' },
        component: resolve => require(["@/views/download/index.vue"], resolve),
        children:[
            {
                path:'/zip',
                name:"zip",
                meta: { title: '下载', icon: '' },
                component: resolve => require(["@/views/download/zip.vue"], resolve), 
            },
            {
                path:'/bigfile',
                name:"bigfile",
                meta: { title: '大文件下载', icon: '' },
                component: resolve => require(["@/views/download/bigfile.vue"], resolve), 
            }
        ]
    },
    {   path:'/router',
        name:"router",
        meta: { title: '路由', icon: '' },
        component: resolve => require(["@/views/routers/index.vue"], resolve)
    },
    // { path:'/axios',
    //   name:"axios",
    //   meta: { title: 'axios', icon: '' },
    //   component: resolve => require(["@/views/axios/index.vue"], resolve)
    // },
    {   path:'/virtualDom',
        name: "virtualDom",
        meta: { title: 'virtualDom', icon: '' },
        component: resolve => require(["@/views/virtualDom/index.vue"], resolve)
    },
    {   path:'/brower',
        name: "brower",
        meta: { title: 'brower', icon: '' },
        component: resolve => require(["@/views/brower/index.vue"], resolve)
    },
    {   path:'/konva',
        name: "konva",
        meta: { title: 'konva', icon: '' },
        component: resolve => require(["@/views/konva/index.vue"], resolve)
    },
    {   path:'/login',
        name: "login",
        meta: { title: '登录11', icon: '' },
        component: resolve => require(["@/views/login/index.vue"], resolve)
    },
    {   path:'/es6',
        name: "es6",
        meta: { title: 'es6', icon: '' },
        component: resolve => require(["@/views/es6/index.vue"], resolve),
        children:[
            {
            path:'/arrow',
            name: "arrow",
            meta: { title: '箭头函数', icon: '' },
            component: resolve => require(["@/views/es6/arrow.vue"], resolve),
            },
            {
                path:'/arr',
                name: "arr",
                meta: { title: '数组的扩展', icon: '' },
                component: resolve => require(["@/views/es6/arr.vue"], resolve),
                },
                {
                    path:'/unicode',
                    name:'unicode',
                    meta: { title: 'unicode', icon: '' },
                    component: resolve => require(["@/views/es6/unicode.vue"], resolve),
                },
                {
                    path:'/func',
                    name:'func',
                    meta: { title: '函数', icon: '' },
                    component: resolve => require(["@/views/es6/function.vue"], resolve),
                }
    
    
    ]
    },
    {
        path:'detail',
        name: "detail",
        meta: { title: '详情页面', icon: '' },
        component: resolve => require(["@/views/detail/index.vue"], resolve)
    },
    {
        path:'video',
        name: "video",
        meta: { title: '视频', icon: '' },
        component: resolve => require(["@/views/video/index.vue"], resolve)
    },
    {
        path:'minx',
        name: "minx",
        meta: { title: 'vue混入', icon: '' },
        component: resolve => require(["@/views/minx/index.vue"], resolve)
    },
    {
        path:'bigUpload',
        name: "bigUpload",
        meta: { title: '大文件上传', icon: '' },
        component: resolve => require(["@/views/upload/index.vue"], resolve)
    }
    ]
   const routersss=[{
    path: '/main',
    name: 'main',
    component: resolve => require(["@/views/main.vue"], resolve),
    meta: { title: '', icon: '' },
    children:children
}]
router.beforeEach((to, from, next) => {
    //前置守卫用方法里面写箭头函数(()=>{})
    console.log('routercccc',router);
    //假设的例子
    let token=store.state.ModuleA.token;
    if (to.path==='/'||to.path==='/login') {
      if(token){
         alert('登录了');
        // 严格意义上应该是后端返回的第一个路由的path
         next('/webscoket');//跳到你定义的页面
      } else {
       next();//跳到登录页面
      }
    } else {
        if(token){
            // 动态添加路由，此时路由列表已经显示在页面，但是点击时没有页面应用
            // 需要将添加的路由添加到router.options.routes，
            // 然后再动态添加该路由router.addRoutes
            // 路由每切换一次,下面的代码就调用一次，
            resetRouter()
            // 404页面要加到最后
            const is404=routersss.some(item=>{
                return item.path==='*'
            })
            if(!is404){
                routersss.push({
                    path: '*',
                    redirect: '/404',
                    hidden: true
                  })
            } 
            const newRoutes = router.options.routes.concat(routersss)
            router.options.routes = newRoutes
            console.log('router.options.routes',router.options.routes);
            router.addRoutes(routersss) // 动态添加可访问路由表
            console.log();
            // 遇到问题：对于addRoute添加的路由，在刷新时会白屏
            // https://blog.csdn.net/qq_45325810/article/details/120866401
            // 获取新菜单路由，设置404页面等
            // next({ path: to.path, replace: true })
            // 解决页面刷新出现空白页面问题
            // https://blog.csdn.net/m0_46529579/article/details/110645334
            //解决页面刷新出现空白页面问题 way1
            if(to.matched.length===0){
                next({path:to.path})
            }else{
                next()
            }
            // if (to.path) {
            //     next({ path: to.path });
            // } else {
            //     next();
            // }
        }else {
            next({ path: '/' })
          }
       
    }
        
 })
//  添加404页面
// 一些白名单和一些权限