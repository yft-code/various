<template>
  <div class="container">
    <div class="businessTop">
      <div style="width:95%;margin:0 auto;padding-top:16px;">
      <div style="display:flex;width: 100%;">
        <div>
          <img style="width:75px;height:74px" src="@/assets/login/logo.png" alt="">
        </div>
        <div style="width:100%">
           <div style="display:flex;">
            <div class="componyTitle">博易智软股份有限公司</div>
            <div class="xucun">存续</div>
           </div>
           <div style="width: 100%;">
             <div style="margin-top:10px">
              <span  class="detailTitle">法定代表人:</span><span class="titleLeftWord">毛霖</span>
              <span  class="detailTitle titleLeft">注册时间:</span><span class="titleLeftWord">2017.12.25</span>
              <span  class="detailTitle titleLeft">注册资本:</span><span class="titleLeftWord">2500万人民币</span>
              <span class="detailTitleButton titleLeft">查看企业详情</span>
              <span class="detailTitleButton titleLeft">查看招商策略</span>
             </div>
           </div>
           <div class="topDetail" style="width: 100%;">
          <div style="width:100%;background:rgba(17,170,255,0.05);padding: 5px;">
            <div style="width:50%">
              <el-descriptions class="margin-top" :column="2" :size="size">
    <!-- <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template> -->
    <el-descriptions-item label="电话:">029-88899666</el-descriptions-item>
    <el-descriptions-item label="公司网址:"><span style="color:rgba(17,170,255,1)">
      www.byzr.com
    </span>
      </el-descriptions-item>
    <el-descriptions-item label="行业:">采矿、稀有金属、加工</el-descriptions-item>
    <el-descriptions-item label="地址:">
      南京市雨花台区安德门大街57号
    </el-descriptions-item>
    <!-- <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> -->
  </el-descriptions>
            </div>
        
          </div>
           </div>
        </div>
     
      </div>
      </div>
    </div>
    <div class="businessMiddle">
     <div style="width:95%;margin:0 auto;padding-top:16px">
      <div class="analyTitle">企业匹配度分析</div>
      <div style="display:flex;margin-top: 24px;">
        <div class="titles">矿产资源开发产业园建设项目</div>
        <div style="display:flex">
          <div style="margin-left:23px;font-size: 16px;color:rgba(51,51,51,1)">匹配度:</div>
          <div style="margin-top:-5px">
            <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
          </div>
        </div>
      </div>
      <div class="tables">
      <div>
        <div style="margin:36px 0 16px 0;font-size:16px">企业条件</div>
        <el-descriptions :column="2" border>
  <el-descriptions-item label="企业标签" label-class-name="my-label" content-class-name="my-content">
    <el-tag>高营收</el-tag>
<el-tag style="margin-left:5px" type="warning">低污染</el-tag>
<el-tag style="margin-left:5px" type="info"><span style="color:rgba(170,90,232,1)">快速增长</span></el-tag>
<el-tag style="margin-left:5px" type="info">信用良好</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="行业">
    采矿、稀有金属、加工
  </el-descriptions-item>
  <el-descriptions-item label="能耗">
    <div>单位产值水耗3立方米/万元</div>
    <div>单位产值能耗0.3吨标煤/万元</div>
  </el-descriptions-item>
  <!-- <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item> -->
  <el-descriptions-item label="投入产出" :contentStyle="{'text-align': 'right'}">企业面积10亩，年产值3000万元，年纳税300万</el-descriptions-item>
</el-descriptions>
      </div>
      <div>
 <div style="margin:24px 0 14px 0;font-size:16px">项目要求</div>
 <el-descriptions :column="2" border>
  <el-descriptions-item label="关键词" label-class-name="my-label" content-class-name="my-content">
    <el-tag>高营收</el-tag>
<el-tag style="margin-left:5px" type="warning">低污染</el-tag>
<!-- <el-tag style="margin-left:5px" type="info"><span style="color:rgba(170,90,232,1)">快速增长</span></el-tag> -->
<el-tag style="margin-left:5px" type="info">信用良好</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="行业">
    采矿、稀有金属、加工
  </el-descriptions-item>
  <el-descriptions-item label="能耗">
    <div>单位产值水耗3立方米/万元</div>
    <div>单位产值能耗0.3吨标煤/万元</div>
  </el-descriptions-item>
  <el-descriptions-item label="用地" :contentStyle="{'text-align': 'right'}">企业面积10亩，年产值3000万元，年纳税300万</el-descriptions-item>
  <el-descriptions-item label="投入产出" :contentStyle="{'text-align': 'right'}">企业面积10亩，年产值3000万元，年纳税300万</el-descriptions-item>
</el-descriptions>
      </div>
    </div>
      <div>
        <div style="margin:32px 0 14px 0;font-size:16px">企业优质度分析</div>
        <div style="width:100%%;height:350px;background:#fff;display:flex">
          <!-- <div style="flex:0"></div> -->
          <div style="flex:1;height:300px;">
            <div id="radar" ref="radar"  style="width:80%;margin:0 auto; height: 80%"></div>
          </div>
          <div style="flex:1.2">
           <div style="width:250px;margin:0 auto;display: flex;
           justify-content:space-between;">
            <div class="buttons">
              缴税
            </div>
            <div class="buttons">
              企业信用
            </div>
          </div>
          <div style="width:450px;margin:0 auto;display: flex;
           justify-content:space-between;margin-top:20px;">
            <div class="buttons">
              缴税
            </div>
            <div class="buttons">
              企业信用
            </div>
          </div>
          <div style="width:500px;margin:0 auto;display: flex;
           justify-content:space-between;margin-top:10px;">
            <div class="buttonsMiddle">
                <div class="buttons">行业前景</div>
            </div>
            <div class="middles">
              <div><span>近12个月营收同比增长</span><span style="color:rgb(83,193,255)">60%</span></div>
              <div><span>近12个月营收同比增长</span><span style="color:rgb(83,193,255)">60%</span></div>
              <div><span>近12个月营收同比增长</span><span style="color:rgb(83,193,255)">60%</span></div>
            </div>
            <div class="buttonsMiddle">
              <div class="buttons">行业地位</div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>
  
  <script>
    import * as echarts from 'echarts'
  import elementResizeDetectorMaker from "element-resize-detector";
export default {
 data(){
     return{
      value: 3.7,
      size:'mini',
      radar:null,
     }
 }, 
 mounted(){
    this.initRadar()
 },
  methods: {
    // 初始化雷达图
    initRadar(){
      this.radar= echarts.init(document.getElementById("radar"));
      let  option = {
    title: {
        text: '80分',
        top: '45%',
        left: '45%',
    },
    // 去除显示鼠标点击框
    tooltip: {
          trigger: 'axis'
        },
    radar: {
        indicator: [
           { name: '营收', max: 6500},
           { name: '缴税', max: 16000},
           { name: '行业地位', max: 30000},
           { name: '企业信用', max: 38000},
           { name: '增长速度', max: 52000},
           { name: '行业前景', max: 25000}
        ]
    },
    grid: {
          top: "15%",
          left: "5%",
          right: "8%",
          bottom: "3%",
          containLabel: true,
        },
    series: [{
        type: 'radar',
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                // name : '水果',
                symbol: "none",
                areaStyle: { color: "rgba(17,170,255,0.16)",border:"#11AAFF" ,
              }, //雷达覆盖区域背景颜色
                //这里的配置显示数值
                // label: {
                //     normal: {
                //         show: true,
                //         formatter:function(params) {
                //             return params.value;
                //         }
                //     }
                // }
            }
        ]
    }]
};
    this.radar.setOption(option);
    }
  },
};
</script>
  
  <style scoped lang="scss">
  .buttons{
    padding: 10px 28px;
    font-size: 16px;
    color: rgba(102,102,102,1);
    border: 1px solid rgba(51,51,51,0.1);
  }
  .middles{
       color: rgba(0,0,0,1);
       font-size: 16px;
  }
  .buttonsMiddle{
    margin-top: 12px;
  }
  .businessTop{
    width: 100%;
    background-color: #fff;
    /* padding: 10px; */
  }
  .componyTitle{
   font-size: 22px;
    color:#333333;
    font-weight:550;
  }
  .detailTitle{
    color:#666666;
    font-size:16px;

  }
  .tables{
    :deep .el-descriptions__label.el-descriptions__cell.is-bordered-label {
    font-weight: 700;
    color: var(--el-text-color-regular);
    background:rgba(17,170,255,0.05);
    /* background: var(--el-descriptions-item-bordered-label-background); */
}
:deep .el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell {
    /* border: var(--el-descriptions-table-border); */
    border: 1px solid rgba(17,170,255,0.05);
    padding: 8px 11px;
    // text-align: center;
}
  }
  .topDetail{
    width: 100%;
    margin-top: 17px;
    margin-bottom:24px;
    // background:rgba(17,170,255,0.05);
    :deep .el-descriptions {
      background:rgba(17,170,255,0.05);
    // padding: 5px;
    --el-descriptions-table-border: 1px solid var(--el-border-color-lighter);
    --el-descriptions-item-bordered-label-background: var(--el-fill-color-light);
    box-sizing: border-box;
    font-size: var(--el-font-size-base);
    color: var(--el-text-color-primary);
}
    :deep .el-descriptions__body .el-descriptions__table:not(.is-bordered) .el-descriptions__cell {
 
    padding-bottom: 0px;
    background:rgba(17,170,255,0.05);
    margin:10px;
}

  }
  .detailTitleButton{
    color:#11AAFF;
    font-size:16px;
  }
  .titleLeft{
   margin-left:16px;
  }

  .titleLeftWord{
    color:#333333;
    font-size:16px;
    margin-left: 5px;
  }
  .xucun{
    margin-left: 8px;
    margin-top: 5px;
    line-height: 22px;
    height: 22px;
    padding: 0 8px 0 8px ;
    color: #1890FF;
    font-size:12px;
    background-color: #E6F7FF;

  }
  .my-label {
    background: red;
  }

  .my-content {
    background: #FDE2E2;
  }
  .businessMiddle{
    width: 100%;
    background-color: #fff;
    margin-top:16px;
  }
  .analyTitle{
    color:rgba(51,51,51,1);
    font-size:20px;
    font-weight: 550;
  }
  .titles{
    color:rgba(17,170,255,1);
    font-size:18px;
  }
</style>