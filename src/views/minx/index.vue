<template>
  <div>
    minixs：混入
    将通用的方法写在一个单独的js文件夹
  </div>
</template>

<script>
// 引入混入的js
import common from '../../utils/minixs/index'
export default {
   mixins:[common],//混入 common对象
   created(){
    // 调用混入里面的方法
     this.exm('11111')
   }
}
</script>

<style>

</style>