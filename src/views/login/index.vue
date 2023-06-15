<template>
  <div>
    <!-- <div id="cesium"></div> -->
     {{ math }}
     <el-button @click="toHome()">登录到首页</el-button>
  </div>
</template>

<script>
export default {
   data(){
    return{
        viewer: null,
        math: 'wwwwww'
    }
   },
   mounted(){
   },
   methods:{
    toHome(){
     this.$store.state.ModuleA.token = true
     console.log('this.roter',this.$router);
     this.$router.push({
       path:'/webscoket'
     })
    },
    init(){
      Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NDM1NzQ5MS03NzFiLTRlYWMtYWViMC0wMTVmMjFkYTVjOWQiLCJpZCI6ODk2MDIsImlhdCI6MTY4NTYzNTI3OH0.ziJS9ZVYKlX8Ekp2UHqJP6xVO9JXerJaS6_BApV0700"
      new Cesium.Viewer('cesium',{
        amimation:false,
        timeline:false,
        // terrainProvider:
      })
    }
   }
}
</script>

<style>

#cesium{
  width: 100%;
  height: 100vh;
  background: #000;
}
</style>