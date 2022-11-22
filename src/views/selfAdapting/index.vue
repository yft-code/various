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
  <!-- 网格布局 -->
  <!-- <div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div> -->

<div class="grid-container">
  <div class="item1" v-for="item in 6" :key="item">{{item}}</div>
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
  width: calc((100% - 10px)/3);
  /* padding: 12px  12px; */
}

/* .grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
} */
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
  background-color: #2196F3;
  /* padding: 10px; */
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}
 </style>
