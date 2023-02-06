<template>
  <div>
    <div>全局导航守卫</div>
    <div>路由独享的守卫:beforeEnter,</div>
    <div>组件内的导航守卫：</div>
    <div>当前页跳转到当前页会发生导航故障,报错</div>
    <!-- 子路由渲染地方 -->
    <router-view></router-view>
    <div>动态路由</div>
      <div>
        <el-button>首页</el-button>
        <el-button>详情页</el-button>
        <el-button>订单页</el-button>
      </div>
      <div>
        <img src="@/assets/img/dom.jpg" alt="">
      </div>
      <div>
        vue动态路由添加，vue-router的addRoute方法实现权限控制，添加根路由和子路由
      </div>
      <div>
        路由传参：
        
      </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>

</style>