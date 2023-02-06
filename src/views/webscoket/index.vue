<template>
  <div>
    几种与服务端实时通信的方法:
    https://zhuanlan.zhihu.com/p/74326818
  </div>
</template>

<script>
export default {
 data(){
    return{
      title:'11111'
    }
  },
mounted(){
  let key='2'
  this[key]='3213213123'
  // this是一个对象,this={2:'3213213123'}
  // this.$router.push({path:'/video'})
  console.log('title',this.title);
  console.log('title',this,this[key],key);
}
}
</script>
<style>
</style>