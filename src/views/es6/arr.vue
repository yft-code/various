<!--
 * @FileDescription:轴选择器：对有所帮助的朋友点个关注再走呀！！！！
 * @Author:-----------
 * @LastEditors: ---------
-->

<template>
  <div style="width:100%;border: 1px solid yellow;height:600px" v-load="loading">
    <el-button v-if="show" @click="isShow">显示数据</el-button>
    <div style="margin-bottom: 50px;">
      <!-- 周一 -->
    <div class="hours-container">
      <div>星期一</div>
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
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
   <!-- 周二 -->
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
    <!-- 周三 -->
    <div class="hours-container">
      <div>星期一</div>
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClassThree(12 * item)"
               @click="handleClickThree(12 * item)"
               @mouseover="handleHoverThree(12 * item)"></div>
          <div :class="compClassThree(12 * item + 1)"
               @click="handleClickThree(12 * item + 1)"
               @mouseover="handleHoverThree(12 * item + 1)"></div>
          <div :class="compClassThree(12 * item + 2)"
               @click="handleClickThree(12 * item + 2)"
               @mouseover="handleHoverThree(12 * item + 2)"></div>
          <div :class="compClassThree(12 * item + 3)"
               @click="handleClickThree(12 * item + 3)"
               @mouseover="handleHoverThree(12 * item + 3)"></div>
          <div :class="compClassThree(12 * item + 4)"
               @click="handleClickThree(12 * item + 4)"
               @mouseover="handleHoverThree(12 * item + 4)"></div>
          <div :class="compClassThree(12 * item + 5)"
               @click="handleClickThree(12 * item + 5)"
               @mouseover="handleHoverThree(12 * item + 5)"></div>
          <div :class="compClassThree(12 * item + 6)"
               @click="handleClickThree(12 * item + 6)"
               @mouseover="handleHoverThree(12 * item + 6)"></div>
          <div :class="compClassThree(12 * item + 7)"
               @click="handleClickThree(12 * item + 7)"
               @mouseover="handleHoverThree(12 * item + 7)"></div>
          <div :class="compClassThree(12 * item + 8)"
               @click="handleClickThree(12 * item + 8)"
               @mouseover="handleHoverThree(12 * item + 8)"></div>
          <div :class="compClassThree(12 * item + 9)"
               @click="handleClickThree(12 * item + 9)"
               @mouseover="handleHoverThree(12 * item + 9)"></div>
          <div :class="compClassThree(12 * item + 10)"
               @click="handleClickThree(12 * item + 10)"
               @mouseover="handleHoverThree(12 * item + 10)"></div>
          <div :class="compClassThree(12 * item + 11)"
               @click="handleClickThree(12 * item + 11)"
               @mouseover="handleHoverThree(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <!-- 周四 -->
    <div class="hours-container">
      <div>星期一</div>
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClassFour(12 * item)"
               @click="handleClickFour(12 * item)"
               @mouseover="handleHoverFour(12 * item)"></div>
          <div :class="compClassFour(12 * item + 1)"
               @click="handleClickFour(12 * item + 1)"
               @mouseover="handleHoverFour(12 * item + 1)"></div>
          <div :class="compClassFour(12 * item + 2)"
               @click="handleClickFour(12 * item + 2)"
               @mouseover="handleHoverFour(12 * item + 2)"></div>
          <div :class="compClassFour(12 * item + 3)"
               @click="handleClickFour(12 * item + 3)"
               @mouseover="handleHoverFour(12 * item + 3)"></div>
          <div :class="compClassFour(12 * item + 4)"
               @click="handleClickFour(12 * item + 4)"
               @mouseover="handleHoverFour(12 * item + 4)"></div>
          <div :class="compClassFour(12 * item + 5)"
               @click="handleClickFour(12 * item + 5)"
               @mouseover="handleHoverFour(12 * item + 5)"></div>
          <div :class="compClassFour(12 * item + 6)"
               @click="handleClickFour(12 * item + 6)"
               @mouseover="handleHoverFour(12 * item + 6)"></div>
          <div :class="compClassFour(12 * item + 7)"
               @click="handleClickFour(12 * item + 7)"
               @mouseover="handleHoverFour(12 * item + 7)"></div>
          <div :class="compClassFour(12 * item + 8)"
               @click="handleClickFour(12 * item + 8)"
               @mouseover="handleHoverFour(12 * item + 8)"></div>
          <div :class="compClassFour(12 * item + 9)"
               @click="handleClickFour(12 * item + 9)"
               @mouseover="handleHoverFour(12 * item + 9)"></div>
          <div :class="compClassFour(12 * item + 10)"
               @click="handleClickFour(12 * item + 10)"
               @mouseover="handleHoverFour(12 * item + 10)"></div>
          <div :class="compClassFour(12 * item + 11)"
               @click="handleClickFour(12 * item + 11)"
               @mouseover="handleHoverFour(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <!-- 周五 -->
    <div class="hours-container">
      <div>星期一</div>
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClassFive(12 * item)"
               @click="handleClickFive(12 * item)"
               @mouseover="handleHoverFive(12 * item)"></div>
          <div :class="compClassFive(12 * item + 1)"
               @click="handleClickFive(12 * item + 1)"
               @mouseover="handleHoverFive(12 * item + 1)"></div>
          <div :class="compClassFive(12 * item + 2)"
               @click="handleClickFive(12 * item + 2)"
               @mouseover="handleHoverFive(12 * item + 2)"></div>
          <div :class="compClassFive(12 * item + 3)"
               @click="handleClickFive(12 * item + 3)"
               @mouseover="handleHoverFive(12 * item + 3)"></div>
          <div :class="compClassFive(12 * item + 4)"
               @click="handleClickFive(12 * item + 4)"
               @mouseover="handleHoverFive(12 * item + 4)"></div>
          <div :class="compClassFive(12 * item + 5)"
               @click="handleClickFive(12 * item + 5)"
               @mouseover="handleHoverFive(12 * item + 5)"></div>
          <div :class="compClassFive(12 * item + 6)"
               @click="handleClickFive(12 * item + 6)"
               @mouseover="handleHoverFive(12 * item + 6)"></div>
          <div :class="compClassFive(12 * item + 7)"
               @click="handleClickFive(12 * item + 7)"
               @mouseover="handleHoverFive(12 * item + 7)"></div>
          <div :class="compClassFive(12 * item + 8)"
               @click="handleClickFive(12 * item + 8)"
               @mouseover="handleHoverFive(12 * item + 8)"></div>
          <div :class="compClassFive(12 * item + 9)"
               @click="handleClickFive(12 * item + 9)"
               @mouseover="handleHoverFive(12 * item + 9)"></div>
          <div :class="compClassFive(12 * item + 10)"
               @click="handleClickFive(12 * item + 10)"
               @mouseover="handleHoverFive(12 * item + 10)"></div>
          <div :class="compClassFive(12 * item + 11)"
               @click="handleClickFive(12 * item + 11)"
               @mouseover="handleHoverFive(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <!-- 周六 -->
    <div class="hours-container">
      <div>星期一</div>
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClassSix(12 * item)"
               @click="handleClickSix(12 * item)"
               @mouseover="handleHoverSix(12 * item)"></div>
          <div :class="compClassSix(12 * item + 1)"
               @click="handleClickSix(12 * item + 1)"
               @mouseover="handleHoverSix(12 * item + 1)"></div>
          <div :class="compClassSix(12 * item + 2)"
               @click="handleClickSix(12 * item + 2)"
               @mouseover="handleHoverSix(12 * item + 2)"></div>
          <div :class="compClassSix(12 * item + 3)"
               @click="handleClickSix(12 * item + 3)"
               @mouseover="handleHoverSix(12 * item + 3)"></div>
          <div :class="compClassSix(12 * item + 4)"
               @click="handleClickSix(12 * item + 4)"
               @mouseover="handleHoverSix(12 * item + 4)"></div>
          <div :class="compClassSix(12 * item + 5)"
               @click="handleClickSix(12 * item + 5)"
               @mouseover="handleHoverSix(12 * item + 5)"></div>
          <div :class="compClassSix(12 * item + 6)"
               @click="handleClickSix(12 * item + 6)"
               @mouseover="handleHoverSix(12 * item + 6)"></div>
          <div :class="compClassSix(12 * item + 7)"
               @click="handleClickSix(12 * item + 7)"
               @mouseover="handleHoverSix(12 * item + 7)"></div>
          <div :class="compClassSix(12 * item + 8)"
               @click="handleClickSix(12 * item + 8)"
               @mouseover="handleHoverSix(12 * item + 8)"></div>
          <div :class="compClassSix(12 * item + 9)"
               @click="handleClickSix(12 * item + 9)"
               @mouseover="handleHoverSix(12 * item + 9)"></div>
          <div :class="compClassSix(12 * item + 10)"
               @click="handleClickSix(12 * item + 10)"
               @mouseover="handleHoverSix(12 * item + 10)"></div>
          <div :class="compClassSix(12 * item + 11)"
               @click="handleClickSix(12 * item + 11)"
               @mouseover="handleHoverSix(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <!-- 周日 -->
    <div class="hours-container">
      <div>星期一</div>
      <div v-for="(item, index) in hours"
           :key="index"
           class="hours-item">
        <div class="hours-item-value"
             style="border-right:1px solid #ccc">
          <div :class="compClassSeven(12 * item)"
               @click="handleClickSeven(12 * item)"
               @mouseover="handleHoverSeven(12 * item)"></div>
          <div :class="compClassSeven(12 * item + 1)"
               @click="handleClickSeven(12 * item + 1)"
               @mouseover="handleHoverSeven(12 * item + 1)"></div>
          <div :class="compClassSeven(12 * item + 2)"
               @click="handleClickSeven(12 * item + 2)"
               @mouseover="handleHoverSeven(12 * item + 2)"></div>
          <div :class="compClassSeven(12 * item + 3)"
               @click="handleClickSeven(12 * item + 3)"
               @mouseover="handleHoverSeven(12 * item + 3)"></div>
          <div :class="compClassSeven(12 * item + 4)"
               @click="handleClickSeven(12 * item + 4)"
               @mouseover="handleHoverSeven(12 * item + 4)"></div>
          <div :class="compClassSeven(12 * item + 5)"
               @click="handleClickSeven(12 * item + 5)"
               @mouseover="handleHoverSeven(12 * item + 5)"></div>
          <div :class="compClassSeven(12 * item + 6)"
               @click="handleClickSeven(12 * item + 6)"
               @mouseover="handleHoverSeven(12 * item + 6)"></div>
          <div :class="compClassSeven(12 * item + 7)"
               @click="handleClickSeven(12 * item + 7)"
               @mouseover="handleHoverSeven(12 * item + 7)"></div>
          <div :class="compClassSeven(12 * item + 8)"
               @click="handleClickSeven(12 * item + 8)"
               @mouseover="handleHoverSeven(12 * item + 8)"></div>
          <div :class="compClassSeven(12 * item + 9)"
               @click="handleClickSeven(12 * item + 9)"
               @mouseover="handleHoverSeven(12 * item + 9)"></div>
          <div :class="compClassSeven(12 * item + 10)"
               @click="handleClickSeven(12 * item + 10)"
               @mouseover="handleHoverSeven(12 * item + 10)"></div>
          <div :class="compClassSeven(12 * item + 11)"
               @click="handleClickSeven(12 * item + 11)"
               @mouseover="handleHoverSeven(12 * item + 11)"></div>
        </div>
        <div class="hours-item-header">
          <span v-if="index%2 === 0">{{ timeHours[index] }}</span>
        </div>
      </div>
    </div>
    <div class="tipss color999 font12 fontw ">
      <i class="el-icon-warning font14"></i>操作提示：点击向右滑动为选中，反之取消。
    </div>
  
    
    </div>
{{loading}}
<div>

</div>
<div ><span class="">周一已选时间段：</span>
      <span
            style="color:#1890ff"
            v-for="(items,index) in tips"
            :key="index">{{ items }}，</span>
    </div>
<div><span class="">周二已选时间段：</span>
      <span class="fontw times"
            style="color:#1890ff"
            v-for="(items,index) in timeListsTwo"
            :key="index">{{ items }}，</span>
    </div>
    <div><span class="">周三已选时间段：</span>
      <span class="fontw times"
            style="color:#1890ff"
            v-for="(items,index) in timeListsThree"
            :key="index">{{ items }}，</span>
    </div>
    <div><span class="">周四已选时间段：</span>
      <span class="fontw times"
            style="color:#1890ff"
            v-for="(items,index) in timeListsFour"
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
      console.log('1');
      this.sendTimeList = this.timeLineLists
    },
    tips () {
      console.log('2');
      this.$emit('tipsList', this.tips)
    },
    timeRangeList: function (value) {
      console.log('3');
      this.$emit('change', value);
      this.$parent.$emit("el.form.change");// 触发父组件的校验规则
    },
    sendTimeList: {
      handler () {
        console.log('4');
        this.transformedIndex();
      },
      deep: true
    }
  },
  computed: {
  },
  created(){
       
      //  if(this.flag){
      //  this.compClass (19)
      //   setTimeout(()=>{
      //     this.flag=false
      //   })
      //  }
        
    // this.timeRangeListIndex=[0,1,2,3,4,5,6,7,8,9,10,11]
    //   console.log('this.timeRangeListIndex',this.timeRangeListIndex);
    //   return this.timeRangeListIndex.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
   
  },
  data () {
    return {
      loading:true,
      show:true,
      flag:true,
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
      // =====周二
      flagTwo:true,
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
      sendTimeLists: [],
      // 周三
      flagThree:true,
      selectStartThree: false,// 开始
      startIndexThree: '0',// 开始下标
      timeRangeListThree: [],// 选择的时间段
      timeListThree: [0],// 选中的下标
      tempStartThree: [],// 预选下标
      timeListsThree: [],//提示操作
      closeHourThree: '',//选择结束时间
      closeMinThree: '',//选择结束分钟
      beginHourThree: '',//开始时间
      beginMinThree: '',//开始时间
      sendTimeListThree: [],
      // 周四  加了编辑功能
      selectStartFour: false,// 开始
      startIndexFour: '0',// 开始下标
      timeRangeListFour: [],// 选择的时间段
      timeListFour: [0],// 选中的下标
      tempStartFour: [],// 预选下标
      timeListsFour: ['00-30','8-9'],//提示操作
      closeHourFour: '',//选择结束时间
      closeMinFour: '',//选择结束分钟
      beginHourFour: '',//开始时间
      beginMinFour: '',//开始时间
      sendTimeListFour: [],
      editFour:true,
      flagFour:true,
      // 周五
      selectStartFive: false,// 开始
      startIndexFive: '0',// 开始下标
      timeRangeListFive: [],// 选择的时间段
      timeListFive: [0],// 选中的下标
      tempStartFive: [],// 预选下标
      timeListsFive: ['00-30','8-9'],//提示操作
      closeHourFive: '',//选择结束时间
      closeMinFive: '',//选择结束分钟
      beginHourFive: '',//开始时间
      beginMinFive: '',//开始时间
      sendTimeListFive: [],
      editFive:true,
      flagFive:true,
      // 周六
      selectStartSix: false,// 开始
      startIndexSix: '0',// 开始下标
      timeRangeListSix: [],// 选择的时间段
      timeListSix: [0],// 选中的下标
      tempStartSix: [],// 预选下标
      timeListsSix: ['00-30','8-9'],//提示操作
      closeHourSix: '',//选择结束时间
      closeMinSix: '',//选择结束分钟
      beginHourSix: '',//开始时间
      beginMinSix: '',//开始时间
      sendTimeListSix: [],
      editSix:true,
      flagSix:true,
      // 周日
      selectStartSeven: false,// 开始
      startIndexSeven: '0',// 开始下标
      timeRangeListSeven: [],// 选择的时间段
      timeListSeven: [0],// 选中的下标
      tempStartSeven: [],// 预选下标
      timeListsSeven: ['00-30','8-9'],//提示操作
      closeHourSeven: '',//选择结束时间
      closeMinSeven: '',//选择结束分钟
      beginHourSeven: '',//开始时间
      beginMinSeven: '',//开始时间
      sendTimeListSeven: [],
      editSeven:true,
      flagSeven:true,
    }
  },
  methods: {
    isShow(){
      this.show=false
      this.flag=true
      this.loading=true
      this.flagTwo=true
      console.log('loading',this.loading);
      setTimeout(()=>{
          //  this.flag=true
      })
    },
    // 周一
    // 时间区间转换成下标区间
    transformedIndex () {
      this.timeRangeListIndex = [];
      this.timeRangeList = this.sendTimeList;
      this.timeRangeList.forEach(element => {
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
      console.log('tips',this.tips);
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
      if(this.flag){
        this.getNewtype(index)
      }
      return this.timeRangeListIndex.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewtype(index){
      this.timeRangeListIndex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flag=false
      
    },
    compItem (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
    // ===周二
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
      if(this.flagTwo){
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
      this.flagTwo=false
    },
    compItemTwo (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
// 周三
 // 时间区间转换成下标区间
 transformedIndexThree () {
      this.timeListThree = [];
      this.timeRangeListThree = this.sendTimeListThree;
      this.timeRangeListThree.forEach(element => {
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
              this.timeListThree.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });

      this.timeListsThree = this.timeRangeListThree && this.timeRangeListThree.length > 0 ? this.timeRangeListThree : '';
      console.log('tips',this.timeListsThree);
    },
    // 下标区间转换成时间区间
    transformedSectionThree () {
      this.timeRangeListThree = [];
      // Array.from(new Set(this.timeRangeListThree))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeListThree.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.closeHourThree = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourThree === this.beginHourThree) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinThree = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourThree < 10 ? '0' + this.closeHourThree : this.closeHourThree}:${this.closeMinThree}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinThree = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourThree < 10 ? '0' + this.closeHourThree : this.closeHourThree}:${this.closeMinThree}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.beginHourThree = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.beginMinThree = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.beginHourThree < 10 ? '0' + this.beginHourThree : this.beginHourThree}:${this.beginMinThree}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeListThree.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeListThree.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.closeHourThree = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourThree === this.beginHourThree) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinThree = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourThree < 10 ? '0' + this.closeHourThree : this.closeHourThree}:${this.closeMinThree}`;
              this.timeRangeListThree.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinThree = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourThree < 10 ? '0' + this.closeHourThree : this.closeHourThree}:${this.closeMinThree}`;
              this.timeRangeListThree.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.closeMinThree = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.closeHourThree < 10 ? '0' + this.closeHourThree : this.closeHourThree}:${this.closeMinThree}`;
            // this.timeRangeListThree.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      this.timeListsThree = this.timeRangeListThree && this.timeRangeListThree.length > 0 ? this.timeRangeListThree : '';
    },
    // 点击事件
    handleClickThree (index) {
      
      if (this.selectStartThree) {
        // 双击取反
        if (index === this.Three) {
          if (this.timeListThree.indexOf(index) > -1) {
            this.timeListThree.splice(this.timeListThree.indexOf(index), 1);
          } else {
            this.timeListThree.push(this.Three);
          }
        } else if (index > this.Three) {
          // 选取数据--向右添加，向左取消
          while (index >= this.Three) {
            this.timeListThree.push(this.Three);
            this.Three++;
          }
          this.timeListThree = Array.from(new Set(this.timeListThree));
        } else {
          // 删除数据
          while (this.Three >= index) {
            if (this.timeListThree.indexOf(index) > -1) {
              this.timeListThree.splice(this.timeListThree.indexOf(index), 1);
            }
            index++;
          }
        }
        this.Three = '';
        this.tempStartThree = [];
        this.transformedSectionThree();
      } else {
        this.Three = index;
      }
      this.selectStartThree = !this.selectStartThree;
    },
    // 预选区间
    handleHoverThree (index) {
      if (this.selectStartThree) {
        this.tempStartThree = [];
        // 选取数据--向右添加，向左取消
        if (index > this.Three) {
          while (index >= this.Three) {
            this.tempStartThree.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.Three >= index) {
            this.tempStartThree.push(index);
            index++;
          }
        }
      }
    },
  
    // 是否选中，计算className
    compClassThree (index) {
      if (index === this.startIndexThree) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.startIndexThree) {
        if (this.tempStartThree.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempStartThree.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      if(this.flagThree){
          if(index===299){
           this.loading=false
      }
        this.getNewClassThree(index)
      }
      return this.timeListThree.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewClassThree(index){
      this.timeListThree=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flagThree=false
    },
    compItemThree (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
    // 周四
       // 时间区间转换成下标区间
       transformedIndexFour () {
      this.timeListFour = [];
      this.timeRangeListFour = this.sendTimeListFour;
      this.timeRangeListFour.forEach(element => {
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
              this.timeListFour.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });
      // eslint-disable-next-line no-constant-condition
      if(!this.editFour){
        this.timeListsFour = this.timeRangeListFour && this.timeRangeListFour.length > 0 ? this.timeRangeListFour : '';
      }
      console.log('tips',this.timeListsFour);
    },
    // 下标区间转换成时间区间
    transformedSectionFour () {
      this.timeRangeListFour = [];
      // Array.from(new Set(this.timeRangeListFour))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeListFour.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.closeHourFour = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourFour === this.beginHourFour) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinFour = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFour < 10 ? '0' + this.closeHourFour : this.closeHourFour}:${this.closeMinFour}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinFour = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFour < 10 ? '0' + this.closeHourFour : this.closeHourFour}:${this.closeMinFour}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.beginHourFour = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.beginMinFour = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.beginHourFour < 10 ? '0' + this.beginHourFour : this.beginHourFour}:${this.beginMinFour}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeListFour.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeListFour.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.closeHourFour = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourFour === this.beginHourFour) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinFour = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFour < 10 ? '0' + this.closeHourFour : this.closeHourFour}:${this.closeMinFour}`;
              this.timeRangeListFour.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinFour = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFour < 10 ? '0' + this.closeHourFour : this.closeHourFour}:${this.closeMinFour}`;
              this.timeRangeListFour.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.closeMinFour = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.closeHourFour < 10 ? '0' + this.closeHourFour : this.closeHourFour}:${this.closeMinFour}`;
            // this.timeRangeListFour.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      if(!this.editFour){
        this.timeListsFour = this.timeRangeListFour && this.timeRangeListFour.length > 0 ? this.timeRangeListFour : '';
      }
    },
    // 点击事件
    handleClickFour (index) {
      this.editFour=false
      if (this.selectStartFour) {
        // 双击取反
        if (index === this.Four) {
          if (this.timeListFour.indexOf(index) > -1) {
            this.timeListFour.splice(this.timeListFour.indexOf(index), 1);
          } else {
            this.timeListFour.push(this.Four);
          }
        } else if (index > this.Four) {
          // 选取数据--向右添加，向左取消
          while (index >= this.Four) {
            this.timeListFour.push(this.Four);
            this.Four++;
          }
          this.timeListFour = Array.from(new Set(this.timeListFour));
        } else {
          // 删除数据
          while (this.Four >= index) {
            if (this.timeListFour.indexOf(index) > -1) {
              this.timeListFour.splice(this.timeListFour.indexOf(index), 1);
            }
            index++;
          }
        }
        this.Four = '';
        this.tempStartFour = [];
        this.transformedSectionFour();
      } else {
        this.Four = index;
      }
      this.selectStartFour = !this.selectStartFour;
    },
    // 预选区间
    handleHoverFour (index) {
      if (this.selectStartFour) {
        this.tempStartFour = [];
        // 选取数据--向右添加，向左取消
        if (index > this.Four) {
          while (index >= this.Four) {
            this.tempStartFour.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.Four >= index) {
            this.tempStartFour.push(index);
            index++;
          }
        }
      }
    },
  
    // 是否选中，计算className
    compClassFour (index) {
      if (index === this.startIndexFour) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.startIndexFour) {
        if (this.tempStartFour.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempStartFour.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      if(this.flagFour){
          if(index===299){
           this.loading=false
      }
        this.getNewClassFour(index)
      }
      return this.timeListFour.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewClassFour(index){
      this.timeListFour=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flagFour=false
    },
    compItemFour (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
    // 周五
      // 时间区间转换成下标区间
      transformedIndexFive () {
      this.timeListFive = [];
      this.timeRangeListFive = this.sendTimeListFive;
      this.timeRangeListFive.forEach(element => {
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
              this.timeListFive.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });
      // eslint-disable-next-line no-constant-condition
      if(!this.editFive){
        this.timeListsFive = this.timeRangeListFive && this.timeRangeListFive.length > 0 ? this.timeRangeListFive : '';
      }
      console.log('tips',this.timeListsFive);
    },
    // 下标区间转换成时间区间
    transformedSectionFive () {
      this.timeRangeListFive = [];
      // Array.from(new Set(this.timeRangeListFive))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeListFive.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.closeHourFive = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourFive === this.beginHourFive) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinFive = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFive < 10 ? '0' + this.closeHourFive : this.closeHourFive}:${this.closeMinFive}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinFive = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFive < 10 ? '0' + this.closeHourFive : this.closeHourFive}:${this.closeMinFive}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.beginHourFive = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.beginMinFive = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.beginHourFive < 10 ? '0' + this.beginHourFive : this.beginHourFive}:${this.beginMinFive}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeListFive.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeListFive.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.closeHourFive = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourFive === this.beginHourFive) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinFive = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFive < 10 ? '0' + this.closeHourFive : this.closeHourFive}:${this.closeMinFive}`;
              this.timeRangeListFive.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinFive = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourFive < 10 ? '0' + this.closeHourFive : this.closeHourFive}:${this.closeMinFive}`;
              this.timeRangeListFive.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.closeMinFive = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.closeHourFive < 10 ? '0' + this.closeHourFive : this.closeHourFive}:${this.closeMinFive}`;
            // this.timeRangeListFive.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      if(!this.editFive){
        this.timeListsFive = this.timeRangeListFive && this.timeRangeListFive.length > 0 ? this.timeRangeListFive : '';
      }
    },
    // 点击事件
    handleClickFive (index) {
      this.editFive=false
      if (this.selectStartFive) {
        // 双击取反
        if (index === this.Five) {
          if (this.timeListFive.indexOf(index) > -1) {
            this.timeListFive.splice(this.timeListFive.indexOf(index), 1);
          } else {
            this.timeListFive.push(this.Five);
          }
        } else if (index > this.Five) {
          // 选取数据--向右添加，向左取消
          while (index >= this.Five) {
            this.timeListFive.push(this.Five);
            this.Five++;
          }
          this.timeListFive = Array.from(new Set(this.timeListFive));
        } else {
          // 删除数据
          while (this.Five >= index) {
            if (this.timeListFive.indexOf(index) > -1) {
              this.timeListFive.splice(this.timeListFive.indexOf(index), 1);
            }
            index++;
          }
        }
        this.Five = '';
        this.tempStartFive = [];
        this.transformedSectionFive();
      } else {
        this.Five = index;
      }
      this.selectStartFive = !this.selectStartFive;
    },
    // 预选区间
    handleHoverFive (index) {
      if (this.selectStartFive) {
        this.tempStartFive = [];
        // 选取数据--向右添加，向左取消
        if (index > this.Five) {
          while (index >= this.Five) {
            this.tempStartFive.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.Five >= index) {
            this.tempStartFive.push(index);
            index++;
          }
        }
      }
    },
  
    // 是否选中，计算className
    compClassFive (index) {
      if (index === this.startIndexFive) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.startIndexFive) {
        if (this.tempStartFive.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempStartFive.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      if(this.flagFive){
          if(index===299){
           this.loading=false
      }
        this.getNewClassFive(index)
      }
      return this.timeListFive.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewClassFive(index){
      this.timeListFive=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flagFive=false
    },
    compItemFive (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
    // 周六
        // 时间区间转换成下标区间
        transformedIndexSix () {
      this.timeListSix = [];
      this.timeRangeListSix = this.sendTimeListSix;
      this.timeRangeListSix.forEach(element => {
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
              this.timeListSix.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });
      // eslint-disable-next-line no-constant-condition
      if(!this.editSix){
        this.timeListsSix = this.timeRangeListSix && this.timeRangeListSix.length > 0 ? this.timeRangeListSix : '';
      }
      console.log('tips',this.timeListsSix);
    },
    // 下标区间转换成时间区间
    transformedSectionSix () {
      this.timeRangeListSix = [];
      // Array.from(new Set(this.timeRangeListSix))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeListSix.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.closeHourSix = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourSix === this.beginHourSix) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinSix = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSix < 10 ? '0' + this.closeHourSix : this.closeHourSix}:${this.closeMinSix}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinSix = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSix < 10 ? '0' + this.closeHourSix : this.closeHourSix}:${this.closeMinSix}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.beginHourSix = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.beginMinSix = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.beginHourSix < 10 ? '0' + this.beginHourSix : this.beginHourSix}:${this.beginMinSix}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeListSix.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeListSix.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.closeHourSix = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourSix === this.beginHourSix) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinSix = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSix < 10 ? '0' + this.closeHourSix : this.closeHourSix}:${this.closeMinSix}`;
              this.timeRangeListSix.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinSix = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSix < 10 ? '0' + this.closeHourSix : this.closeHourSix}:${this.closeMinSix}`;
              this.timeRangeListSix.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.closeMinSix = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.closeHourSix < 10 ? '0' + this.closeHourSix : this.closeHourSix}:${this.closeMinSix}`;
            // this.timeRangeListSix.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      if(!this.editSix){
        this.timeListsSix = this.timeRangeListSix && this.timeRangeListSix.length > 0 ? this.timeRangeListSix : '';
      }
    },
    // 点击事件
    handleClickSix (index) {
      this.editSix=false
      if (this.selectStartSix) {
        // 双击取反
        if (index === this.Six) {
          if (this.timeListSix.indexOf(index) > -1) {
            this.timeListSix.splice(this.timeListSix.indexOf(index), 1);
          } else {
            this.timeListSix.push(this.Six);
          }
        } else if (index > this.Six) {
          // 选取数据--向右添加，向左取消
          while (index >= this.Six) {
            this.timeListSix.push(this.Six);
            this.Six++;
          }
          this.timeListSix = Array.from(new Set(this.timeListSix));
        } else {
          // 删除数据
          while (this.Six >= index) {
            if (this.timeListSix.indexOf(index) > -1) {
              this.timeListSix.splice(this.timeListSix.indexOf(index), 1);
            }
            index++;
          }
        }
        this.Six = '';
        this.tempStartSix = [];
        this.transformedSectionSix();
      } else {
        this.Six = index;
      }
      this.selectStartSix = !this.selectStartSix;
    },
    // 预选区间
    handleHoverSix (index) {
      if (this.selectStartSix) {
        this.tempStartSix = [];
        // 选取数据--向右添加，向左取消
        if (index > this.Six) {
          while (index >= this.Six) {
            this.tempStartSix.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.Six >= index) {
            this.tempStartSix.push(index);
            index++;
          }
        }
      }
    },
  
    // 是否选中，计算className
    compClassSix (index) {
      if (index === this.startIndexSix) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.startIndexSix) {
        if (this.tempStartSix.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempStartSix.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      if(this.flagSix){
          if(index===299){
           this.loading=false
      }
        this.getNewClassSix(index)
      }
      return this.timeListSix.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewClassSix(index){
      this.timeListSix=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flagSix=false
    },
    compItemSix (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
//  周日
  // 时间区间转换成下标区间
  transformedIndexSeven () {
      this.timeListSeven = [];
      this.timeRangeListSeven = this.sendTimeListSeven;
      this.timeRangeListSeven.forEach(element => {
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
              this.timeListSeven.push(startNum);
              startNum++;
            }
          } else {
            this.$message.error("时间段格式不正确");
          }
        } else {
          this.$message.error("没有拿到开始时间或结束时间或者时间段格式不对");
        }
      });
      // eslint-disable-next-line no-constant-condition
      if(!this.editSeven){
        this.timeListsSeven = this.timeRangeListSeven && this.timeRangeListSeven.length > 0 ? this.timeRangeListSeven : '';
      }
      console.log('tips',this.timeListsSeven);
    },
    // 下标区间转换成时间区间
    transformedSectionSeven () {
      this.timeRangeListSeven = [];
      // Array.from(new Set(this.timeRangeListSeven))
      let startTime = '', endTime = '', len = this.hours.length;
      for (let index = this.hours[0] * 12; index < 12 * (len + 1); index++) {
        if (this.timeListSeven.indexOf(index) > -1) {
          // 如果有开始时间，直接确定结束时间
          if (startTime) {
            // debugger
            this.closeHourSeven = Math.floor((index + 1) / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourSeven === this.beginHourSeven) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinSeven = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSeven < 10 ? '0' + this.closeHourSeven : this.closeHourSeven}:${this.closeMinSeven}`;
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinSeven = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSeven < 10 ? '0' + this.closeHourSeven : this.closeHourSeven}:${this.closeMinSeven}`;
            }
          } else {
            // 没有开始时间，确定当前点为开始时间
            // debugger
            this.beginHourSeven = Math.floor(index / 12);
            let startTimeAll = 5 * (index % 12) === 5 ? '05' : 5 * ((index) % 12)
            this.beginMinSeven = index % 12 === 0 ? "00" : startTimeAll;
            startTime = `${this.beginHourSeven < 10 ? '0' + this.beginHourSeven : this.beginHourSeven}:${this.beginMinSeven}`;
          }
          // 如果是最后一格，直接结束
          if (index === 12 * this.hours.length + 1) {
            endTime = `${Math.floor((index + 1) / 12)}:00`;
            this.timeRangeListSeven.push(`${startTime ? startTime : "23:30"}-${endTime}`);
            startTime = '';
            endTime = '';
          }
        } else {
          // 若这个点不在选择区间，确定一个时间段
          if (startTime && endTime) {
            this.timeRangeListSeven.push(`${startTime}-${endTime}`);
            startTime = '';
            endTime = '';
          } else if (startTime && !endTime) {
            // 这里可能只选半个小时
            this.closeHourSeven = Math.floor(index / 12);
            //判断是否重复选择选择下标开始结束时间
            if (this.closeHourSeven === this.beginHourSeven) {
              let endTimeAll = 5 * ((index) % 12) === 5 ? '05' : 5 * ((index) % 12)
              this.closeMinSeven = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSeven < 10 ? '0' + this.closeHourSeven : this.closeHourSeven}:${this.closeMinSeven}`;
              this.timeRangeListSeven.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            } else {
              let endTimeAll = 5 * ((index + 1) % 12) === 5 ? '05' : 5 * ((index + 1) % 12)
              this.closeMinSeven = (index + 1) % 12 === 0 ? "00" : endTimeAll;
              endTime = `${this.closeHourSeven < 10 ? '0' + this.closeHourSeven : this.closeHourSeven}:${this.closeMinSeven}`;
              this.timeRangeListSeven.push(`${startTime}-${endTime}`);
              startTime = '';
              endTime = '';
            }
            // let endtimeAll = 15 * ((index + 1) % 4)
            // this.closeMinSeven = index % 4 === 0 ? "00" : endtimeAll;
            // endTime = `${this.closeHourSeven < 10 ? '0' + this.closeHourSeven : this.closeHourSeven}:${this.closeMinSeven}`;
            // this.timeRangeListSeven.push(`${startTime}-${endTime}`);
            // startTime = '';
            // endTime = '';
          }
        }
      }
      if(!this.editSeven){
        this.timeListsSeven = this.timeRangeListSeven && this.timeRangeListSeven.length > 0 ? this.timeRangeListSeven : '';
      }
    },
    // 点击事件
    handleClickSeven (index) {
      this.editSeven=false
      if (this.selectStartSeven) {
        // 双击取反
        if (index === this.Seven) {
          if (this.timeListSeven.indexOf(index) > -1) {
            this.timeListSeven.splice(this.timeListSeven.indexOf(index), 1);
          } else {
            this.timeListSeven.push(this.Seven);
          }
        } else if (index > this.Seven) {
          // 选取数据--向右添加，向左取消
          while (index >= this.Seven) {
            this.timeListSeven.push(this.Seven);
            this.Seven++;
          }
          this.timeListSeven = Array.from(new Set(this.timeListSeven));
        } else {
          // 删除数据
          while (this.Seven >= index) {
            if (this.timeListSeven.indexOf(index) > -1) {
              this.timeListSeven.splice(this.timeListSeven.indexOf(index), 1);
            }
            index++;
          }
        }
        this.Seven = '';
        this.tempStartSeven = [];
        this.transformedSectionSeven();
      } else {
        this.Seven = index;
      }
      this.selectStartSeven = !this.selectStartSeven;
    },
    // 预选区间
    handleHoverSeven (index) {
      if (this.selectStartSeven) {
        this.tempStartSeven = [];
        // 选取数据--向右添加，向左取消
        if (index > this.Seven) {
          while (index >= this.Seven) {
            this.tempStartSeven.push(index);
            index--;
          }
        } else {
          // 删除数据
          while (this.Seven >= index) {
            this.tempStartSeven.push(index);
            index++;
          }
        }
      }
    },
  
    // 是否选中，计算className
    compClassSeven (index) {
      if (index === this.startIndexSeven) {
        return 'hours-item-left preSelected';
      }
      if (index >= this.startIndexSeven) {
        if (this.tempStartSeven.indexOf(index) > -1) {
          return 'hours-item-left preSelected';
        }
      } else {
        if (this.tempStartSeven.indexOf(index) > -1) {
          return 'hours-item-left unSelected';
        }
      }
      if(this.flagSeven){
          if(index===299){
           this.loading=false
      }
        this.getNewClassSeven(index)
      }
      return this.timeListSeven.indexOf(index) > -1 ? 'hours-item-left selected' : 'hours-item-left';
    },
    getNewClassSeven(index){
      this.timeListSeven=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
       64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
       84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
      ]
      this.flagSeven=false
    },
    compItemSeven (item) {
      // 不足10前面补0
      return item < 10 ? `0${item}` : item;
    },
 
  },
  mounted () {
    this.transformedIndex();
    this.transformedSection();
    this.transformedIndexTwo();
    this.transformedSectionTwo();
    this.transformedIndexThree();
    this.transformedSectionThree();
    this.transformedIndexFour();
    this.transformedSectionFour();
    this.transformedIndexFive();
    this.transformedSectionFive();
    this.transformedIndexSix();
    this.transformedSectionSix();
    this.transformedIndexSeven();
    this.transformedSectionSeven();
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