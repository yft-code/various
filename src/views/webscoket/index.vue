<template>
  <div class="line">
    <div class="echarsItem">
              <div class="echarsHeader">
                  <div class="headerTitle">园区费用统计</div>
              </div>
              <div
                      id="MyChar2"
                      style="width: 100%; height: 80%"
                      ref="MyChar2"
              ></div>
          </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
      title:'11111'
    }
  },

  methods:{
 drawLine1(){
        this.MyChart2 = echarts.init(document.getElementById("MyChar2"));
        let option = {
            grid: {
                bottom: '12%',
                right: '6%',
                top: '12%'
            },
        xAxis: {
          name:'日期',
          type: 'category',
            nameTextStyle: {
                color: 'rgba(51,51,51,0.3)',
                padding: [0, 0, -20, -20],
                verticalAlign: 'bottom'
            },
            boundaryGap: true,
          data: ['2021.1.1', '2021.1.2', '2021.1.3', '2021.1.4', '2021.1.5', '2021.1.6', '2021.1.7'],
            axisLine: {
                lineStyle: {
                    color: 'rgba(222,222,222,1)'
                }
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: 'rgba(222,222,222,1)'
                }
            },
            axisLabel: {
                show: true,
                interval: 0,
                color: 'rgba(0,29,30,0.6)'
            }
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#FFF",
          extraCssText: "box-shadow:0px 0px 8px #ddd",
          textStyle: {
            color: "#959595",
          },
          formatter: (params, index) => {
            // console.log(params,'ooooo')
            let title =
              '<div style="line-height:32px;margin-left:8px;margin-right:8px">' +
              params[0].axisValue

            let result = "";
            params.forEach((element, index) => {
              if (element.seriesName === "车辆") {

                result +=
                  '<div style="line-height:28px;margin-left:8px;margin-right:8px"><div style="margin-right:6px;float:left;margin-top:10px;display:inline-block;width:8px;height:8px;background-color:#5B8FF9"></div>' +
                  element.seriesName +
                  '<span style="color:#0A1933;margin-left:12px">' +
                  element.data +
                  "万元</span></div>";
              }else if(element.seriesName === "水电"){
                result +=
                  '<div style="line-height:28px;margin-left:8px;margin-right:8px"><div style="margin-right:6px;float:left;margin-top:10px;display:inline-block;width:8px;height:8px;background-color:#5AD8A6"></div>' +
                  element.seriesName +
                  '<span style="color:#0A1933;margin-left:12px">' +
                  element.data +
                  "万元</span></div>";
              } else {
                result +=
                  '<div style="line-height:28px;margin-left:8px;margin-right:8px"><div style="margin-right:6px;float:left;margin-top:10px;display:inline-block;width:8px;height:8px;background-color:#5D7092"></div>' +
                  element.seriesName +
                  '<span style="color:#0A1933;margin-left:12px">' +
                  element.data +
                  "万元</span></div>";
              }
            });
            return title + result;
          },
          axisPointer: {
            // Use axis to trigger tooltip
            type: "line",
            lineStyle: {
              color: "rgba(0,29,30,0.5)",
              type: "dashed",
            },
          },
        },
        color:['#11ADFA','#15E0BB','#5C7193'],
        legend: {
          right:25,
            itemWidth: 14,
            itemHeight: 2,
            top:0,
          //  data: ['车辆', '水电', '物业']
          data:[{
            name:'车辆',
            icon: 'rect',

          },{
            name:'水电',
            icon: 'rect',
          },{
            name:'物业',
            icon: 'rect',
          }]
        },
        yAxis: {
          name:'单位/万元',
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#F1F1F1",
            },
          },
            nameTextStyle: {
                color: 'rgba(51,51,51,0.3)'
            },
        },
        series: [
          {
            name:'车辆',
            data: [820, 932, 901, 934, 1190, 1000, 1120],
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                color:'rgba(17,170,255,1)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(17,170,255,0.2)'},
                            {offset: 1, color: 'rgba(17,170,255,0)'},
                        ]
                )
                }
          },
          {
            name:'水电',
            data: [620, 832, 801, 834, 290, 130, 320],
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle:{
              color:'#15E0BB',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(21,224,187,0.2)'},
                        {offset: 1, color: 'rgba(21,224,187,0)'}
                    ]
                )}
          },
          {
            name:'物业',
            data: [420, 832, 701, 834, 990, 630, 320],
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                color:'rgba(93,112,146,1)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(93,112,146,0.2)'},
                            {offset: 1, color: 'rgba(93,112,146,0)'}
                        ]
                )
            }
          }
        ]
      };
        this.MyChart2.setOption(option);
    },
  },
mounted(){
  this.drawLine1()
  let key='2'
  this[key]='3213213123'
  // this是一个对象,this={2:'3213213123'}
  // this.$router.push({path:'/video'})
  console.log('title',this.title);
  console.log('title',this,this[key],key);
}
}
</script>
<style>
.line{
  height: 100vh;
}
</style>