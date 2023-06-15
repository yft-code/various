<template>
  <div>
    详情页
{{`${math}'1111111'${function(){
        return 'hello world'
}()}`}}
  </div>
</template>

<script>
export default {
  data(){
  return{
    math:'hhhhh'
  }
  },
    // 组件内路由导航
beforeRouteEnter(to, from,next) {
  console.log('to',to,from);
  next()
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this`！
    // 因为当守卫执行时，组件实例还没被创建！
  },
}
</script>

<style>

</style>