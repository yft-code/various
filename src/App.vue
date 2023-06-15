<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default{
  mounted(){
    console.log('this.$api',this.$api);
    this.$api.service.getExample('hhhhhh')
  }
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  line-height: 1;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
