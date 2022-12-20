<!--
 * @FileDescription:轴选择器：对有所帮助的朋友点个关注再走呀！！！！
 * @Author: -----------
 * @LastEditors: ---------
-->
<template>
  <div style="margin-bottom: 50px;">
    <div class="hours-container">
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClass(12 * item)"
               @click="handleClick(12 * item)"
               @mouseover="handleHover(12 * item)"></div>
          <div :class="compClass(12 * item + 1)"
               @click="handleClick(12 * item + 1)"
               @mouseover="handleHover(12 * item + 1)"></div>
          <div :class="compClass(12 * item + 2)"
               @click="handleClick(12 * item + 2)"
               @mouseover="handleHover(12 * item + 2)"></div>
          <div :class="compClass(12 * item + 3)"
               @click="handleClick(12 * item + 3)"
               @mouseover="handleHover(12 * item + 3)"></div>
          <div :class="compClass(12 * item + 4)"
               @click="handleClick(12 * item + 4)"
               @mouseover="handleHover(12 * item + 4)"></div>
          <div :class="compClass(12 * item + 5)"
               @click="handleClick(12 * item + 5)"
               @mouseover="handleHover(12 * item + 5)"></div>
          <div :class="compClass(12 * item + 6)"
               @click="handleClick(12 * item + 6)"
               @mouseover="handleHover(12 * item + 6)"></div>
          <div :class="compClass(12 * item + 7)"
               @click="handleClick(12 * item + 7)"
               @mouseover="handleHover(12 * item + 7)"></div>
          <div :class="compClass(12 * item + 8)"
               @click="handleClick(12 * item + 8)"
               @mouseover="handleHover(12 * item + 8)"></div>
          <div :class="compClass(12 * item + 9)"
               @click="handleClick(12 * item + 9)"
               @mouseover="handleHover(12 * item + 9)"></div>
          <div :class="compClass(12 * item + 10)"
               @click="handleClick(12 * item + 10)"
               @mouseover="handleHover(12 * item + 10)"></div>
          <div :class="compClass(12 * item + 11)"
               @click="handleClick(12 * item + 11)"
               @mouseover="handleHover(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index === 0 || index === 24">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <div class="tipss color999 font12 fontw ">
      <i class="el-icon-warning font14"></i>操作提示：点击向右滑动为选中，反之取消。
    </div>
    <div class="tips"><span class="color999">已选时间段：</span>
      <span class="fontw times"
            style="color:#1890ff"
            v-for="(items,index) in tips"
            :key="index">{{ items }}，</span>
    </div>
 
  </div>
</template>
 
<script>
 
export default {
  model: {
    prop: "sendTimeList",
  },
 
  props: {
    // sendTimeList: {
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
  watch: {
    timeLineLists () {
      this.sendTimeList = this.timeLineLists
    },
    tips () {
      this.$emit('tipsList', this.tips)
    },
    timeRangeList: function (value) {
      this.$emit('change', value);
      this.$parent.$emit("el.form.change");// 触发父组件的校验规则
    },
    sendTimeList: {
      handler () {
        this.transformedIndex();
      },
      deep: true
    }
  },
  computed: {
  },
  data () {
    return {
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      timeHours: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],// 选项
      selectStart: false,// 开始
      startIndex: '0',// 开始下标
      timeRangeList: [],// 选择的时间段
      timeRangeListIndex: [0],// 选中的下标
      tempRangeIndex: [],// 预选下标
      tips: '向右选中，向左取消选择',//提示操作
      endHour: '',//选择结束时间
      endMin: '',//选择结束分钟
      startHour: '',//开始时间
      startMin: '',//开始时间
      sendTimeList: [],
      // 实现编辑时回显
      flag:true
    }
  },
  methods: {
    // 时间区间转换成下标区间
    transformedIndex () {
      this.timeRangeListIndex = [];
      this.timeRangeList = this.sendTimeList;
      this.timeRangeList.forEach(element => {
        const [startTime, endTime] = element.match(/\d+\:\d+/g);
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
              this.timeRangeListIndex.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });
      this.tips = this.timeRangeList && this.timeRangeList.length > 0 ? this.timeRangeList : '';
    },
    // 下标区间转换成时间区间
    transformedSection () {
      this.timeRangeList = [];
      // Array.from(new Set(this.timeRangeList))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeRangeListIndex.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.endHour = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.endHour === this.startHour) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.endMin = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.endHour < 10 ? '0' + this.endHour : this.endHour}:${this.endMin}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.endMin = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.endHour < 10 ? '0' + this.endHour : this.endHour}:${this.endMin}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.startHour = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.startMin = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.startHour < 10 ? '0' + this.startHour : this.startHour}:${this.startMin}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeList.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeList.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.endHour = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.endHour === this.startHour) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.endMin = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.endHour < 10 ? '0' + this.endHour : this.endHour}:${this.endMin}`;
              this.timeRangeList.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.endMin = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.endHour < 10 ? '0' + this.endHour : this.endHour}:${this.endMin}`;
              this.timeRangeList.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.endMin = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.endHour < 10 ? '0' + this.endHour : this.endHour}:${this.endMin}`;
            // this.timeRangeList.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      this.tips = this.timeRangeList && this.timeRangeList.length > 0 ? this.timeRangeList : '';
    },
    // 点击事件
    handleClick (index) {
      if (this.selectStart) {
        // 双击取反
        if (index === this.startIndex) {
          if (this.timeRangeListIndex.indexOf(index) > -1) {
            this.timeRangeListIndex.splice(this.timeRangeListIndex.indexOf(index), 1);
          } else {
            this.timeRangeListIndex.push(this.startIndex);
          }
        } else if (index > this.startIndex) {
          // 选取数据--向右添加，向左取消
          while (index >= this.startIndex) {
            this.timeRangeListIndex.push(this.startIndex);
            this.startIndex++;
          }
          this.timeRangeListIndex = Array.from(new Set(this.timeRangeListIndex));
        } else {
          // 删除数据
          while (this.startIndex >= index) {
            if (this.timeRangeListIndex.indexOf(index) > -1) {
              this.timeRangeListIndex.splice(this.timeRangeListIndex.indexOf(index), 1);
            }
            index++;
          }
        }
        this.startIndex = '';
        this.tempRangeIndex = [];
        this.transformedSection();
      } else {
        this.startIndex = index;
      }
      this.selectStart = !this.selectStart;
    },
    // 预选区间
    handleHover (index) {
      if (this.selectStart) {
        this.tempRangeIndex = [];
        // 选取数据--向右添加，向左取消
        if (index > this.startIndex) {
          while (index >= this.startIndex) {
            this.tempRangeIndex.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.startIndex >= index) {
            this.tempRangeIndex.push(index);
            index++;
          }
        }
      }
    },
    // 是否选中，计算className
    compClass (index) {
      if (index === this.startIndex) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.startIndex) {
        if (this.tempRangeIndex.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempRangeIndex.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      // 实现编辑回显,(只编辑回显样式的,时间回显可以让后端返回)不清楚为什么直接不显示,选择加了一个定时器，使用flag防止多次遍历循环生成
      setTimeout(()=>{
        if(this.flag){
        this.getEditType()
      }
      })
      return this.timeRangeListIndex.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },

    getEditType(){
      // this.timeRangeListIndex可以传给后端，回显时返回，我们那个后端没让我传这个值,只让我传了时间段，不过他计算过后把这个值返还给我了
      // 后端大概思路:该时间选择器一共分成了288份，288/24=12,一小时占12份，一份就为5分钟，通过时间段算得到这个值
      this.timeRangeListIndex=[1,2,3,4,5,6,7,8,9,10,11,12]
      // 一定要把flag变为false,否则会无线循环浏览器崩溃
      this.flag=false
    },
    compItem (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
 
  },
  mounted () {
    this.transformedIndex();
    this.transformedSection();
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