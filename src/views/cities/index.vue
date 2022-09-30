<template>
  <div>
      <div>
        <h2>获取各级省市名称</h2>
         <p>npm install element-china-area-data -S</p>
         <p></p>
          <el-select v-model="value1" multiple placeholder="请选择">
    <el-option
      v-for="item in provinceAndCityData"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择">
    <el-option
      v-for="item in cityData"
      :key="item.value"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
  </div>
</div>
</template>
<script>
import { provinceAndCityData } from "element-china-area-data";
export default {
  data(){
       return{
        value1:'',
        value2:'',
        invoiceForm:{address:''},
        provinceAndCityData:[],
       }
  },
    mounted() {
    this.provinceAndCityData = provinceAndCityData;
  },
  computed: {
    cityData() {
      // 初始时的值
      let targetItem = this.provinceAndCityData.filter((item) => {
        return item.value === this.invoiceForm.address;
      });
      // 修改后的值
     let targetItems = this.provinceAndCityData.filter((item) => {
        return item.label === this.invoiceForm.address;
       });
      return targetItem[0]?.children ||  targetItems[0]?.children ;
    },
    dialogCityData() {
      let targetItem = this.provinceAndCityData.filter((item) => {
        return item.value === this.invoiceForm.city;
      });
      return targetItem[0]?.children;
    },
  },
methods:{
}
}
</script>

<style>
  
</style>