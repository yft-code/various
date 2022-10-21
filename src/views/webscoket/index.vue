<template>
<div>
<div id="cesiumContainer"> </div>
    <div class="workAreaTable" :id="billboard.id">
    <div class="equipmentDetails">
      <div class="equipmentHeader">
        <img
          class="icoStyle"
          src="@/assets/cesium/billboard/ico.png"
          alt=""
        />
        <span class="equipmentHeaderTitle">{{billboard.name}}</span>
        
        <span class="clear"></span>
      </div> 
      <div class="workAreaHead">
        <div class="workAreaHeadLi" v-for="(item,index) in headerList" :key="index" :style="{width:item.width}">
          {{item.title}}
        </div>
        <div class="clear"></div>
      </div>
      <div class="workAreaBody">
        <div class="workAreaBodyLi" v-for="(item,index) in billboard.data" :key="index">
           <div class="workAreaDetail" style="width:20%">
             {{item.time}}
           </div>
            <div class="workAreaDetail" style="width:10%">
             {{item.people}}
           </div>
            <div class="workAreaDetail" style="width:15%">
             {{item.area}}
           </div>
            <div class="workAreaDetail" style="width:10%">
             {{item.floor}}
           </div>
            <div class="workAreaDetail" style="width:25%">
             {{item.frequency}}
           </div>
            <div class="workAreaDetail" style="width:20%;color:#0BE6D4">
             {{item.complete}}
           </div>
            <div class="clear"></div>
        </div>
      </div> 
      <div class="workAreaImg">
        <img src="@/assets/cesium/billboard/pre.png" class="preImg"/>
        <img src="@/assets/cesium/billboard/next.png"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {addFeature} from '../../../packages/cesium/utils/hook/hookChars'
 export  default {
  data() {
    return {
viewer:{},
billboard:
{
id:"AreaBillboard1",
center:{
   longitude: 105.922338,
   latitude: 27.964801,
   height: 947.39,
},
show:true,
anchor:[0,0],
name:"厂区一",
width:650,
height:362,
rotate:50,
data:[
{
   time: "2022.03.01",
   people: "张三",
   area: "园区大楼",
   floor: "一层",
   frequency: "1",
   complete: "已完成",
},
{
   time: "2022.03.01",
   people: "张三",
   area: "园区大楼",
   floor: "一层",
   frequency: "1",
   complete: "已完成",
},
{
   time: "2022.03.01",
   people: "张三",
   area: "园区大楼",
   floor: "一层",
   frequency: "1",
   complete: "已完成",
},
{
   time: "2022.03.01",
   people: "张三",
   area: "园区大楼",
   floor: "一层",
   frequency: "1",
   complete: "已完成",
},
{
   time: "2022.03.01",
   people: "张三",
   area: "园区大楼",
   floor: "一层",
   frequency: "1",
   complete: "已完成",
},
 ],},
headerList:
[
{
   title: '时间',
   width: '20%',
},
{
   title: '人员',
   width: "10%",
},
{
   title: '区域',
   width: '15%',
},
{
   title: '楼层',
   width: '10%',
},
{
   title: '保洁次数/天',
   width: '25%',
}
 ],
     }
   },
  mounted(){
    this.Mineinit();
  },
  methods: {
    flyTo(center) {
$viewer.qtum.centerAt(center);
    },
    addMapBox(viewer) {
let token = "pk.eyJ1IjoiYWRtaW44OTU2IiwiYSI6ImNrcG1jYTN2cjF6emMycHBpMm1hdGlmNjUifQ.1VfIq2__m-Y--yp4c37ZbA";
let layer = new Cesium.MapboxStyleImageryProvider({
    url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    styleId:"dark-v10",
    accessToken: token,
    scaleFactor: true
});
viewer.imageryLayers.addImageryProvider(layer);
    },
    Mineinit() {
let url = haoutil.system.getRequestByName(
"config",
"static/common/config/ksconfig.json"
);
let map = qtum3d.createMap({
    id: "cesiumContainer",
    url: url,
    success: async (viewer, i) => {
     viewer.scene.requestRenderMode = true;
    window.$viewer = viewer;
$("#location_mars_jwd").hide();
this.flyTo({
    y: 27.964285,
    x: 105.91934,
    z: 986.99,
    heading: 82.3,
    pitch:-18,
    roll:0.5,
});
let _that = this;
let dataSource = new Cesium.CustomDataSource();
$viewer.dataSources.add(dataSource);
this.drawControl = new qtum3d.Draw(window.$viewer, {}).on(
qtum3d.draw.event.DrawCreated,
function (o) {
    _that.drawControl.setVisible(false);
    _that.drawControl;
}
);
window.drawControl = this.drawControl;
let utc = Cesium.JulianDate.fromDate(new Date("2019/10/04 16:00:00"));
viewer.clockViewModel.currentTime = Cesium.JulianDate.addHours(
    utc,
    9,
    new Cesium.JulianDate()
);
// 加载模型代码
let layerWork = qtum3d.layer.createLayer(
{
     type: "3dtiles",
     name: "矿山",
    url:"http://10.22.90.2:8081/ai-daemon-download/model/luzhou/Scene/tileset.json",
    maximumScreenSpaceError: 1,
    offset: {
    z: 75,
    },
    visible: !0,
    },
    viewer
    );
    viewer.scene.requestRenderMode = true;
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40000;
viewer.scene.globe.depthTestAgainstTerrain = !0;
viewer.scene.globe.depthTestAgainstTerrain = false;
this.viewer = $viewer;
// setTimeout((>{

// })

addFeature(this.billboard,this.viewer);
     },
    })
   },
  }
}
</script>
<style scoped>
.workAreaTable {
  width: 464px;
  height: 245px;
  position: absolute;
  pointer-events:all;
  top:0;
  left:-5000px;
  z-index: 9999;
}
.equipmentDetails {
  width: 464px;
  height: 256px;
  background: url("~@/assets/cesium/billboard/bg.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 12px;
  position: relative;
}

.equipmentHeader {
  height: 20px;
  margin-bottom:8px;
}

.icoStyle {
  width: 16px;
  height: 16px;
  float:left;
  margin-top:-1px;
}

.equipmentHeaderTitle {
  margin-left:4px;
  color: #25bcff;
  float:left;
  font-size: 14px;
  font-weight: 500;
}
.clear{
  clear:both;
}
.workAreaHead{
  background: rgba(255,255,255,0.2);
  font-weight: 400;
  color: rgb(180,180,180);
  font-size: 14px;
  padding:0 12px;
}
.workAreaHeadLi{
  float:left;
  line-height: 24px;
}
.workAreaBodyLi{
  background: url("~@/assets/cesium/billboard/areaTable.png") no-repeat;
  height:28px;
  padding:6px 12px;
  
}
.workAreaBody{

}
.workAreaDetail{
  font-family: HelveticaNeue;
  color: #FFFFFF;
  font-size: 14px;
  float:left;
}
.workAreaImg{
  margin-top:8px;
  text-align: right;
}
.preImg{
  margin-right:8px;
  cursor: pointer;
}
</style>
