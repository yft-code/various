<template>
<!-- 文档 -->
<!-- https://lbs.amap.com/api/javascript-api/guide/abc/prepare -->
<!-- 结合vue加载的官方文档 -->
<!-- https://lbs.amap.com/api/javascript-api-v2/guide/abc/amap-vue -->
 <div>
    dhfghdfjs
 <div id="container"></div>
 </div>
 

</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import axios from 'axios';
 const securityJsCode = 'e7115f2fe4d209cc8d7578148fc42feb'; // 您申请的安全密钥
    window._AMapSecurityConfig = {
     securityJsCode // 您申请的安全密钥
};
export default {

data(){
  return{
    //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
    //map:null,
  } 
},
mounted(){
  //DOM初始化完成进行地图初始化
  let url='/api/todos'
  axios.get(url).then(res=>{
       
  })
  // this.initMap();
},
methods:{
  initMap(){
    AMapLoader.load({
      key:"052dae5f1a7c4b6a652024083c7fd78a",// 申请好的Web端开发者Key，首次调用 load 时必填
      version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType', 'AMap.Geolocation'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等// 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap)=>{
      this.map = new AMap.Map("container",{  //设置地图容器id
       resizeEnable: true ,
        viewMode:"3D",    //是否为3D地图模式
        zoom:5, //初始化地图级别
        // lang: "en", //可选值：en，zh_en, zh_cn
        center:[105.602725,37.076636], //初始化地图中心点位置
       lang: "en" //可选值：en，zh_en, zh_cn
      });
    //    this.map.langForeign='en'
        console.log('map',this.map);
          this.map.addControl(new AMap.Scale())
          this.map.addControl(new AMap.ToolBar())
          this.map.addControl(new AMap.HawkEye())
          this.map.addControl(new AMap.MapType())
          this.map.addControl(new AMap.Geolocation())
          
    }).catch(e=>{
      console.log('eee',e);
    })
  },
},
};
</script>

.<style>
#container{
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>
