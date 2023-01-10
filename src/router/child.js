const children=[
    {
    path: "/",
    name: "cities",
    meta: { title: '首页', icon: '' },
    component: resolve => require(["@/views/cities/index.vue"], resolve)
},
{   path:'webscoket',
    name: "webscoket",
    meta: { title: 'webscoket', icon: '' },
    component: resolve => require(["@/views/webscoket/index.vue"], resolve)
},
{   path:'video',
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
        path:'vuex',
        name: "vuex",
        meta: { title: 'vuex', icon: '' },
        component: resolve => require(["@/views/vuex/index.vue"], resolve)
    },
    {
    path:'on',
    name: "on",
    meta: { title: '父子传值', icon: '' },
    component: resolve => require(["@/views/on/index.vue"], resolve)
},
    ],
  },
{   path:'selfAdapting',
    name:"selfAdapting",
    meta: { title: '自适应', icon: '' },
    component: resolve => require(["@/views/selfAdapting/index.vue"], resolve)
},
{   path:'addMultity',
    name:"addMultity",
    meta: { title: '批量添加', icon: '' },
    component: resolve => require(["@/views/batch/index.vue"], resolve)
},
{   path:'downLoad',
    name:"downLoad",
    meta: { title: '下载', icon: '' },
    component: resolve => require(["@/views/download/index.vue"], resolve),
    children:[
        {
            path:'zip',
            name:"zip",
            meta: { title: '下载', icon: '' },
            component: resolve => require(["@/views/download/zip.vue"], resolve), 
        },
        {
            path:'bigfile',
            name:"bigfile",
            meta: { title: '大文件下载', icon: '' },
            component: resolve => require(["@/views/download/bigfile.vue"], resolve), 
        }
    ]
},
{   path:'router',
    name:"router",
    meta: { title: '路由', icon: '' },
    component: resolve => require(["@/views/routers/index.vue"], resolve)
},
{   path:'virtualDom',
    name: "virtualDom",
    meta: { title: 'virtualDom', icon: '' },
    component: resolve => require(["@/views/virtualDom/index.vue"], resolve)
},
{   path:'brower',
    name: "brower",
    meta: { title: 'brower', icon: '' },
    component: resolve => require(["@/views/brower/index.vue"], resolve)
},
{   path:'konva',
    name: "konva",
    meta: { title: 'konva', icon: '' },
    component: resolve => require(["@/views/konva/index.vue"], resolve)
},
{   path:'login',
    name: "login",
    meta: { title: '登录', icon: '' },
    component: resolve => require(["@/views/login/index.vue"], resolve)
},
{   path:'es6',
    name: "es6",
    meta: { title: 'es6', icon: '' },
    component: resolve => require(["@/views/es6/index.vue"], resolve),
    children:[
        {
        path:'arrow',
        name: "arrow",
        meta: { title: '箭头函数', icon: '' },
        component: resolve => require(["@/views/es6/arrow.vue"], resolve),
        },
        {
            path:'arr',
            name: "arr",
            meta: { title: '数组的扩展', icon: '' },
            component: resolve => require(["@/views/es6/arr.vue"], resolve),
            },
            {
                path:'unicode',
                name:'unicode',
                meta: { title: 'unicode', icon: '' },
                component: resolve => require(["@/views/es6/unicode.vue"], resolve),
            },
            {
                path:'func',
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
// {   path:'detail',
//     name: "detail",
//     // 要去那个路由就对哪个路由做判断，路由独享的守卫
//     // beforeEnter: (to, from,next) => {
//     //     // 符合的就next()这个是跳转到当前路由，
//     //     // next('/login'),跳转到登录页
//     //     // if(1>3){
//     //     //     next()
//     //     // }
       
//     //     console.log('to',to,from,next);
//     //     // reject the navigation
//     //     return false
//     //   },
//     meta: { title: '详情页面', icon: '' },
//     component: resolve => require(["@/views/detail/index.vue"], resolve)
// },
]
export const child = {
    children 
  }
  