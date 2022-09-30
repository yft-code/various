<template>
  <div>
    <el-button @click="getSub">总和</el-button>
    <div>库存</div>
  </div>
</template>

<script>
export default {
    methods:{
        getSub(){
         this.$store.commit('changeCountParams',4)
        }
    }
}
</script>

<style>

</style>