<template>
  <div @click="login">
    登录
  </div>
</template>

<script>
export default {
   methods:{
    login(){
      this.$router.push('/cities')
    }
   }
}
</script>

<style>

</style>