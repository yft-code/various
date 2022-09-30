<template>
  <div style="padding:20px">
    <div style="padding-bottom:20px">常见的搜索栏页面自适应解决方法</div>
    <el-form ref="form" :size="size" label-width="80px">
      <el-row
        :gutter="20"
      >
        <!-- 搜索框组件 -->
        <template>
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="6"
            :xl="6"
          >
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
          </el-col>
           <el-col
            :xs="24"
             :sm="24"
            :md="12"
            :lg="6"
            :xl="6"
          >
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
          </el-col>
           <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="6"
            :xl="6"
          >
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
          </el-col>
           <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="6"
            :xl="6"
          >
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
     <div style="padding-bottom:20px">通过遍历循环一行展示固定列数</div>
     <p>cssflex布局实现每行固定div个数,并根据屏幕分辨率自适应布局,通过设置百分比</p>
  <div class="parent">
    <div class="child" v-for="item in arr" :key="item">{{item}}</div>
  </div>
  <div class="card_wrap">
    <div class="c_item" v-for="item in arr" :key="item">{{item}}</div>
  </div>
   <div class="deviceTable">
    <div class="captureLi" v-for="item in arr" :key="item">{{item}}</div>
  </div>
  <!-- 带有背景图片的，将背景图片均分 -->
  <div class="info-bg">
         <img src="../../assets/img/left-top.svg" class="info-bg-inner">
         <div class="info-message">
          <div class="parent-img">
          <div class="child-img" v-for="(item, index) in 4" :key="index">
           <div :class="[`variety-head-child-${index}`]">
              <!-- <img class="info-img" :src="index === varietyIndex ? item.activeIcon: item.icon"> -->
              <span  class="variety-title">{{ item}}</span>
              <!-- <dv-digital-flop :config="item.config"  class="flop-right"></dv-digital-flop> -->
           </div>
           
    </div>
  </div>
         </div>
        </div>
  </div>
</template>
<script>
export default {
  data(){
       return{
        arr:[1,2,3,4,5,6],
        formInline: {
          user: '',
          region: ''
        }
       }
  },
methods:{
}
}
</script>
 <style>
  .info-bg {
   /* flex: 1.1; */
  width: 100%;
  background-color: blue;
  height: 300px;
  /* margin-bottom:20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  }
  .info-bg-inner{
    width: 100%;
  }
  .info-message{
      position: absolute;
      top:0%;
      height: 100%;
      width: 100%;
  }
  .parent-img {
     width: 100%;
     height:100%;
     display: flex;
     flex-flow: row wrap;
     align-items: center;
     justify-content: center;
   }
   .child-img {
    display: flex;
    justify-content: center;
    align-items: center;
     box-sizing: border-box;
     flex: 50%;
     height: 50%;
   }
   .parent {
     width: 100%;
     height: 150px;
     display: flex;
     flex-flow: row wrap;
     align-content: flex-start;
   }
   .child {
     box-sizing: border-box;
     background-color: white;
     flex: 0 0 33%;
     height: 50px;
     border: 1px solid red;
   }

   .card_wrap {
color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding:10px 0 10px 0PX;
}
.c_item {
    flex: 1;
    display: flex;
    color:red;
    font-size: 13px;
    height: 30px;
    /* background: red; */
    line-height: 30px;
    text-align: left;
    padding: 0 10px 0px 0;
    width: calc((100% - 20px) / 3); 
    min-width: calc((100% - 20px) / 3);
    max-width: calc((100% - 20px) / 3); 
   display: block;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
     width:100px;
 }
 .c_item:nth-child(3n) {
      margin-right: 0;
    }
.deviceTable {
  width: 100%;
  display: flex;
  font-size: 16px;
  flex-wrap: wrap;
  padding: 12px 12px;
}
.captureLi {
background-color: blue;
  width: calc(100% / 3);
  /* padding: 12px 12px; */
}
 </style>
