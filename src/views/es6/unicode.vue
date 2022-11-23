<!--
 * @FileDescription:轴选择器：对有所帮助的朋友点个关注再走呀！！！！
 * @Author:-----------
 * @LastEditors: ---------
 回显终极版本
-->

<template>
  <div>
    <el-button v-if="show" @click="isShow">显示数据</el-button>
    <div v-if="!show" style="margin-bottom: 50px;">
    <div class="hours-container">
      <div>星期一</div>
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClassTwo(12 * item)"
               @click="handleClickTwo(12 * item)"
               @mouseover="handleHoverTwo(12 * item)"></div>
          <div :class="compClassTwo(12 * item + 1)"
               @click="handleClickTwo(12 * item + 1)"
               @mouseover="handleHoverTwo(12 * item + 1)"></div>
          <div :class="compClassTwo(12 * item + 2)"
               @click="handleClickTwo(12 * item + 2)"
               @mouseover="handleHoverTwo(12 * item + 2)"></div>
          <div :class="compClassTwo(12 * item + 3)"
               @click="handleClickTwo(12 * item + 3)"
               @mouseover="handleHoverTwo(12 * item + 3)"></div>
          <div :class="compClassTwo(12 * item + 4)"
               @click="handleClickTwo(12 * item + 4)"
               @mouseover="handleHoverTwo(12 * item + 4)"></div>
          <div :class="compClassTwo(12 * item + 5)"
               @click="handleClickTwo(12 * item + 5)"
               @mouseover="handleHoverTwo(12 * item + 5)"></div>
          <div :class="compClassTwo(12 * item + 6)"
               @click="handleClickTwo(12 * item + 6)"
               @mouseover="handleHoverTwo(12 * item + 6)"></div>
          <div :class="compClassTwo(12 * item + 7)"
               @click="handleClickTwo(12 * item + 7)"
               @mouseover="handleHoverTwo(12 * item + 7)"></div>
          <div :class="compClassTwo(12 * item + 8)"
               @click="handleClickTwo(12 * item + 8)"
               @mouseover="handleHoverTwo(12 * item + 8)"></div>
          <div :class="compClassTwo(12 * item + 9)"
               @click="handleClickTwo(12 * item + 9)"
               @mouseover="handleHoverTwo(12 * item + 9)"></div>
          <div :class="compClassTwo(12 * item + 10)"
               @click="handleClickTwo(12 * item + 10)"
               @mouseover="handleHoverTwo(12 * item + 10)"></div>
          <div :class="compClassTwo(12 * item + 11)"
               @click="handleClickTwo(12 * item + 11)"
               @mouseover="handleHoverTwo(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <div class="tipss color999 font12 fontw ">
      <i class="el-icon-warning font14"></i>操作提示：点击向右滑动为选中，反之取消。
    </div>
    <div class="tips"><span class="color999">已选时间段：</span>
      <span class="fontw times"
            style="color:#1890ff"
            v-for="(items,index) in timeListsTwo"
            :key="index">{{ items }}，</span>
    </div>
 
    </div>
{{loading}}{{timeListsTwo}}
  </div>
</template>
 
<script>
 
export default {
  model: {
    prop: "sendTimeLists",
  },
 
  props: {
    // sendTimeLists: {
    //   required: true,
    //   default: []
    // },
    readonly: {
      type: Boolean,
      default: false
    },
    timeLineLists: {
      type: Array
    }
  },
  computed: {
  },
  created(){
       
      //  if(this.flag){
      //  this.compClassTwo (19)
      //   setTimeout(()=>{
      //     this.flag=false
      //   })
      //  }
        
    // this.timeListTwo=[0,1,2,3,4,5,6,7,8,9,10,11]
    //   console.log('this.timeListTwo',this.timeListTwo);
    //   return this.timeListTwo.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
   
  },
  data () {
    return {
      loading:true,
      show:true,
      flag:false,
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      timeHours: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],// 选项
      selectStartTwo: false,// 开始
      startIndexTwo: '0',// 开始下标
      timeRangeListTwo: [],// 选择的时间段
      timeListTwo: [0],// 选中的下标
      tempStartTwo: [],// 预选下标
      timeListsTwo: [],//提示操作
      closeHourTwo: '',//选择结束时间
      closeMinTwo: '',//选择结束分钟
      beginHourTwo: '',//开始时间
      beginMinTwo: '',//开始时间
      sendTimeLists: []
    }
  },
  methods: {
    isShow(){
      this.show=false
      this.flag=true
      this.loading=true
    },
    // 时间区间转换成下标区间
    transformedIndexTwo () {
      this.timeListTwo = [];
      this.timeRangeListTwo = this.sendTimeLists;
      this.timeRangeListTwo.forEach(element => {
        const [startTime, endTime] = element.match(/\d+\\:\d+/g);
        if (startTime && endTime) {
          let [startHour, startMin] = startTime.split(':');
          let [endHour, endMin] = endTime.split(':');
          if (startHour && startMin && endHour && endMin) {
            let startNum, endNum;
            if (startMin === '00') {
              startNum = 12 * parseInt(startHour);
            } else {
              startNum = 12 * parseInt(startHour) + 1;
            }
            if (endMin === '00') {
              endNum = 12 * parseInt(endHour) - 1;
            } else {
              endNum = 12 * parseInt(endHour);
            }
            while (endNum >= startNum) {
              this.timeListTwo.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });

      this.timeListsTwo = this.timeRangeListTwo && this.timeRangeListTwo.length > 0 ? this.timeRangeListTwo : '';
      console.log('tips',this.timeListsTwo);
    },
    // 下标区间转换成时间区间
    transformedSectionTwo () {
      this.timeRangeListTwo = [];
      // Array.from(new Set(this.timeRangeListTwo))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeListTwo.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.closeHourTwo = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourTwo === this.beginHourTwo) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinTwo = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourTwo < 10 ? '0' + this.closeHourTwo : this.closeHourTwo}:${this.closeMinTwo}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinTwo = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourTwo < 10 ? '0' + this.closeHourTwo : this.closeHourTwo}:${this.closeMinTwo}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.beginHourTwo = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.beginMinTwo = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.beginHourTwo < 10 ? '0' + this.beginHourTwo : this.beginHourTwo}:${this.beginMinTwo}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeListTwo.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeListTwo.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.closeHourTwo = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourTwo === this.beginHourTwo) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinTwo = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourTwo < 10 ? '0' + this.closeHourTwo : this.closeHourTwo}:${this.closeMinTwo}`;
              this.timeRangeListTwo.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinTwo = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourTwo < 10 ? '0' + this.closeHourTwo : this.closeHourTwo}:${this.closeMinTwo}`;
              this.timeRangeListTwo.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.closeMinTwo = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.closeHourTwo < 10 ? '0' + this.closeHourTwo : this.closeHourTwo}:${this.closeMinTwo}`;
            // this.timeRangeListTwo.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      this.timeListsTwo = this.timeRangeListTwo && this.timeRangeListTwo.length > 0 ? this.timeRangeListTwo : '';
    },
    // 点击事件
    handleClickTwo (index) {
      
      if (this.selectStartTwo) {
        // 双击取反
        if (index === this.Two) {
          if (this.timeListTwo.indexOf(index) > -1) {
            this.timeListTwo.splice(this.timeListTwo.indexOf(index), 1);
          } else {
            this.timeListTwo.push(this.Two);
          }
        } else if (index > this.Two) {
          // 选取数据--向右添加，向左取消
          while (index >= this.Two) {
            this.timeListTwo.push(this.Two);
            this.Two++;
          }
          this.timeListTwo = Array.from(new Set(this.timeListTwo));
        } else {
          // 删除数据
          while (this.Two >= index) {
            if (this.timeListTwo.indexOf(index) > -1) {
              this.timeListTwo.splice(this.timeListTwo.indexOf(index), 1);
            }
            index++;
          }
        }
        this.Two = '';
        this.tempStartTwo = [];
        this.transformedSectionTwo();
      } else {
        this.Two = index;
      }
      this.selectStartTwo = !this.selectStartTwo;
    },
    // 预选区间
    handleHoverTwo (index) {
      if (this.selectStartTwo) {
        this.tempStartTwo = [];
        // 选取数据--向右添加，向左取消
        if (index > this.Two) {
          while (index >= this.Two) {
            this.tempStartTwo.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.Two >= index) {
            this.tempStartTwo.push(index);
            index++;
          }
        }
      }
    },
  
    // 是否选中，计算className
    compClassTwo (index) {
      if (index === this.Two) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.Two) {
        if (this.tempStartTwo.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempStartTwo.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      if(this.flag){
          if(index===299){
           this.loading=false
      }
        this.getNewClass(index)
      }
      return this.timeListTwo.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewClass(index){
      this.timeListTwo=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flag=false
    },
    compItemTwo (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
 
  },
  mounted () {
    this.transformedIndexTwo();
    this.transformedSectionTwo();
  }
}
</script>
 
<style lang="scss" scoped>
.hours-container {
  margin-left: 1.5%;
  display: flex;
  cursor: pointer;
  margin-top: 10px;
  .hours-item {
    width: 4%;
    height: 45px;
    // border: 1px solid #c2d0f3;
    border-right: none;
    text-align: center;
    &:last-child {
      .hours-item-value {
        display: none;
      }
      .hours-item-header {
        border-top: none;
        margin-top: 12px;
        margin-left: -25px;
      }
    }
 
    .hours-item-header {
      text-align: left;
      position: relative;
      margin-left: -20%;
      width: 100%;
      height: 30px;
      line-height: 30px;
      border-top: 1px solid #ccc;
 
      &:last-child {
        width: 150%;
      }
    }
    .hours-item-value {
      width: 100%;
      height: 12px;
      box-sizing: border-box;
      display: flex;
      &:first-child {
        border-left: 1px solid #ccc;
      }
      &:last-child {
        border-right: 1px solid #ccc;
      }
      .hours-item-left,
      .hours-item-right {
        width: 50%;
        height: 11px;
        margin-top: 1px;
        // border-right: 1px solid #ccc;
 
        box-sizing: border-box;
        &:last-child {
          border-right: none;
        }
      }
    }
    // 已选中的颜色
    .selected {
      background-color: rgba(0, 87, 255, 0.4);
      border-bottom: 1px solid #ccc;
    }
    .preSelected {
      background-color: rgba(255, 148, 49, 0.4);
      border-bottom: 1px solid #ccc;
    }
    .unSelected {
      background-color: #ffffff;
      border-bottom: 1px solid #ccc;
    }
  }
}
.tips {
  // width: auto;
  border-radius: 4px;
  line-height: 30px;
  border: 1px solid #1890ff;
  background: rgba(53, 158, 255, 0.05);
  padding: 5px 20px;
  position: absolute;
  .times {
    margin-right: 0px;
  }
}
</style>