<template>
  <div>
    <el-button @click="getAdd">＋</el-button>
    <div>库存</div>
    <el-button @click="getPayLoad">载荷</el-button>
  </div>
</template>

<script>
export default {
   methods:{
    chanageParms(){
      this.$store.commit('changeCountParams','30')
     },
      getAdd(){
        console.log('哈哈哈');
        this.$store.commit('changeCount')
      },
    
      getPayLoad(){
        // way1:
        // this.$store.commit('changeCountPayload',{count:80})
        // way2:
        this.$store.commit({
        type: 'changeCountPayload',
        count:10,
       })
      },

   }
}
</script>

<style>

</style>