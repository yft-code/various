<template>
  <div>
    <!-- 高级时间设置 -->
    <div class="timerBox">
      <div class="timers">
        <div class="timers_t">
          <div class="timers_tl">星期\时间</div>
          <div class="timers_tr">
            <div class="timers_trt">
              <h4>00:00 - 12:00</h4>
              <h4>12:00 - 24:00</h4>
            </div>
            <div class="timers_trb">
              <span v-for="(item, idx) in timerinfo.hour" :key="idx">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="timers_b">
          <div class="timers_bl">
            <span v-for="(item, idx) in timerinfo.weeks" :key="idx">{{ item }}</span>
          </div>
          <div class="timers_br" id="timecontainer" @mousedown="mousedownfn">
            <div :class="item == 1 ? 'selected list' : 'list'" @click="changeOne(item, idx)" @click.stop
              v-for="(item, idx) in timeList" :key="idx"></div>
          </div>
        </div>
      </div>
      <div class="timerTips">
        <div class="timerTips_l">
          <i-button type="primary">已选</i-button>
          <i-button type="ghost">未选</i-button>
        </div>
        <div class="timerTips_r">
          <span style="margin-right:15px;" @click="timerClean()">反选</span>
          <span @click="AllClean()">清除</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      timeList: this.timeString,
      keepList: [
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
      ],
      keepList2: [],
      keepList3: [],
      changX: 0,//父级margin等造成的横坐标偏移量
      changY: 0,//父级margin等造成的纵坐标偏移量
      offsetY: 0,//父级滚动条滚动造成的纵坐标偏移量
      selectBoxDashed: null,
      startX: null,
      startY: null,
      initx: null,
      scrollX: null,
      scrollY: null,
      inity: null,
      timerinfo: {
        hour: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      },
    }
  },
  props: {
    baiduData: {
      type: Object,
      default() {
        var arr = {
          name: ''
        };
        return arr
      }
    },
    tencentData: {
      type: Object,
      default() {
        var arr = {
          name: ''
        };
        return arr
      }
    },
    timeString: {
      type: Array,
      default() {
        let _timeArray = []
        for (let i = 0; i < 336; i++) {
          _timeArray.push(0)
        }
        return _timeArray
      }
    },
  },
  model: {
    event: 'triggertime'
  },
  mounted() {
    if (this.baiduData.name == 'baidu') {
      this.changX = 205;
      this.changY = 68;
      this.showbaiduTime();
    }
    if (this.baiduData.name == 'toutiao') {
      this.changX = 0;
      this.changY = 0;
      //  this.showbaiduTime();
    }
    if (this.tencentData.name == 'tencent') {
      this.changX = 0;
      this.changY = 0;
    }
  },
  methods: {
    // 处理偏移值
    offsetFct() {
      if (this.baiduData.name == 'baidu') {
        this.changX = 205;
        this.changY = 68;
        // this.offsetY=$('.i-innerbox').scrollTop();
        this.offsetY = 0;
      }
      if (this.tencentData.name == 'tencent') {
        this.changX = 0;
        this.changY = 0;
        this.offsetY = $('.untilcontainer').scrollTop();
      }
      if (this.tencentData.name == 'toutiao') {
        this.changX = 0;
        this.changY = 0;
        this.offsetY = $('.pointsModal').scrollTop();
      }
    },
    // 展示百度已有时间数据
    showbaiduTime() {
      var time = this.baiduData.time;
      for (var i = 0; i < time.length; i++) {
        var h = (time[i].weekDay - 1) * 48;
        var s = h + time[i].startHour * 2;
        var e = h + (time[i].endHour) * 2;//下标
        for (var j = s; j < e; j++) {
          this.$set(this.timeList, j, 1);
        }
      }
    },
    clearBubble(e) {
      if (e.stopPropagation) {
        e.stopPropagation()
      } else {
        e.cancelBubble = true
      }
      if (e.preventDefault) {
        e.preventDefault()
      } else {
        e.returnValue = false
      }
    },
    // 单击
    changeOne(item, i) {
      var a = item == 1 ? 0 : 1;
      this.$set(this.timeList, i, a);
      if (this.baiduData.name == 'baidu') {
        this.baiduListFct()
      } else {
        this.$emit('selectTime', this.timeList)
      }
    },
    //鼠标开始
    mousedownfn(e) {
      //  创建选框节点
      var node = document.getElementById('timecontainer');
      this.selectBoxDashed = document.createElement("div")
      node.appendChild(this.selectBoxDashed);

      this.scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      this.scrollY = document.documentElement.scrollTop || document.body.scrollTop
      //  设置选框的初始位置
      this.startX = e.x + this.scrollX - this.changX || e.clientX + this.scrollX - this.changX
      this.startY = e.y + this.scrollY - this.changY || e.clientY + this.scrollY - this.changY

      this.selectBoxDashed.style.cssText = `position: absolute;left:${this.startX}px;top:${this.startY}px;background: rgba(253, 218, 135, 0.5);;z-index: 999;`
      //  清除事件冒泡、捕获
      this.clearBubble(e)
      document.body.addEventListener('mousemove', this.mousemovefn)
      document.body.addEventListener('mouseup', this.mouseUpfn)
    },
    // 拖动鼠标ing
    mousemovefn(e) {
      this.offsetFct();
      //  设置选框可见
      this.selectBoxDashed.style.display = 'block'
      //  根据鼠标移动，设置选框的位置、宽高
      this.initx = e.x + this.scrollX - this.changX || e.clientX + this.scrollX - this.changX
      this.inity = e.y + this.scrollY - this.changY || e.clientY + this.scrollY - this.changY
      //  暂存选框的位置及宽高，用于将 select-item 选中
      this.left = Math.min(this.initx, this.startX)
      this.top = Math.min(this.inity, this.startY)
      this.width = Math.abs(this.initx - this.startX)
      this.height = Math.abs(this.inity - this.startY)
      this.selectBoxDashed.style.left = `${this.left}px`
      this.selectBoxDashed.style.top = `${this.top}px`
      this.selectBoxDashed.style.width = `${this.width}px`
      this.selectBoxDashed.style.height = `${this.height}px`
      if (this.baiduData.name == 'baidu') {
        this.top += $('.i-innerbox').scrollTop()
      }
      let fileDivs = document.getElementsByClassName('list')
      for (let i = 0; i < fileDivs.length; i++) {
        let itemX_pos = fileDivs[i].offsetWidth + fileDivs[i].offsetLeft
        let itemY_pos = fileDivs[i].offsetHeight + fileDivs[i].offsetTop - this.offsetY
        let condition1 = itemX_pos > this.left
        let condition2 = itemY_pos > this.top
        let condition3 = fileDivs[i].offsetLeft < (this.left + this.width)
        let condition4 = fileDivs[i].offsetTop - this.offsetY < (this.top + this.height)
        if (condition1 && condition2 && condition3 && condition4) {
          fileDivs[i].classList.add('temp-selected')
        } else {
          fileDivs[i].classList.remove('temp-selected')
        }
      }
      this.clearBubble(e)
    },
    // 松开鼠标
    mouseUpfn(e) {
      document.body.removeEventListener('mousemove', this.mousemovefn)
      let selectDom = document.getElementsByClassName('temp-selected');
      [].slice.call(selectDom).forEach(item => {
        if (item.classList.contains('selected')) {
          item.classList.remove('selected')
        } else {
          item.classList.add('selected')
        }
        item.classList.remove('temp-selected')
      })
      if (this.selectBoxDashed) {//清除选中蒙层
        try {
          this.selectBoxDashed.parentNode.removeChild(this.selectBoxDashed)
        } catch (err) {
          // console.log(err)
        }
      }
      let fileDivs = document.getElementsByClassName('list')
      for (let i = 0; i < fileDivs.length; i++) {
        if (fileDivs[i].classList.contains('selected')) {
          this.$set(this.timeList, i, 1);
        }
        else {
          this.$set(this.timeList, i, 0);
        }
      }
      this.clearBubble(e)
      if (this.baiduData.name == 'baidu') {
        this.baiduListFct()
      } else {
        this.$emit('selectTime', this.timeList)
      }
    },
    //反选所有时间选择
    timerClean() {
      for (var i = 0; i < this.timeList.length; i++) {
        var a = this.timeList[i] == 1 ? 0 : 1;
        this.$set(this.timeList, i, a);
      }
      if (this.baiduData.name == 'baidu') {
        this.baiduListFct()
      } else {
        this.$emit('selectTime', this.timeList)
      }
    },
    //清除重选
    AllClean() {
      for (var i = 0; i < this.timeList.length; i++) {
        var a = this.timeList[i] = 0;
        this.$set(this.timeList, i, a);
      }
      if (this.baiduData.name == 'baidu') {
        this.baiduListFct()
      } else {
        this.$emit('selectTime', this.timeList)
      }
    },
    // 组件百度所需要的时间字段  start
    // {weekDay: 1, startHour: 0, endHour: 10}
    baiduListFct() {
      this.keepList = [
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
        { week: [] },
      ];
      this.keepList2 = [];
      for (var i = 0; i < this.timeList.length; i++) {
        if (this.timeList[i] == 1) {//选中的
          var weekidx = parseInt(i / 48) //星期
          var hour = i % 48 + 1 //几点
          this.keepList[weekidx].week.push({ index: i, hour: hour })
        }
      }
      this.keepListFct()
    },
    // 按百度要求接收数据形式重组
    keepListFct() {
      for (var i = 0; i < this.keepList.length; i++) {
        var startHour = [];
        var endHour = [];
        for (var j = 0; j < this.keepList[i].week.length; j++) {
          if (j == 0 || j == 47) {//如果选中第一项或者最后一项的特殊情况
            if (j == 0) {
              var t = parseInt(this.keepList[i].week[j].hour / 2);
              this.keepList2.push({ weekDay: i + 1, startHour: t, endHour: '' });
              //判断这个开始时间的单元时间格子是否为独立的单个时间单元
              if (j == this.keepList[i].week.length - 1) {
                var et = parseInt(this.keepList[i].week[j].hour / 2);
                this.keepList2[this.keepList2.length - 1].endHour = et;
              } else {
                if (this.keepList[i].week[j].index + 1 != this.keepList[i].week[j + 1].index) {
                  var et = parseInt(this.keepList[i].week[j].hour / 2);
                  this.keepList2[this.keepList2.length - 1].endHour = et;
                } else {

                }
              }
            } else {
              this.keepList2[this.keepList2.length - 1].endHour = 24;
            }
          } else {
            if (j == this.keepList[i].week.length - 1 && this.keepList[i].week[j - 1].index + 1 == this.keepList[i].week[j].index) {//最后一位
              var t = parseInt(this.keepList[i].week[j].hour / 2);
              this.keepList2[this.keepList2.length - 1].endHour = t;
            } else {
              if (this.keepList[i].week[j - 1].index + 1 != this.keepList[i].week[j].index) {//开始时间
                var t = parseInt(this.keepList[i].week[j].hour / 2);
                this.keepList2.push({ weekDay: i + 1, startHour: t, endHour: '' });
                //判断这个开始时间的单元时间格子是否为独立的单个时间单元
                if (j == this.keepList[i].week.length - 1) {
                  // eslint-disable-next-line no-redeclare
                  var et = parseInt(this.keepList[i].week[j].hour / 2);
                  this.keepList2[this.keepList2.length - 1].endHour = et;
                } else {
                  if (this.keepList[i].week[j].index + 1 != this.keepList[i].week[j + 1].index) {
                    // eslint-disable-next-line no-redeclare
                    var et = parseInt(this.keepList[i].week[j].hour / 2);
                    this.keepList2[this.keepList2.length - 1].endHour = et;
                    // eslint-disable-next-line no-empty
                  } else {

                  }
                }
              }
              if (this.keepList[i].week[j - 1].index + 1 == this.keepList[i].week[j].index && this.keepList[i].week[j].index + 1 != this.keepList[i].week[j + 1].index) {//结束时间
                var t = parseInt(this.keepList[i].week[j].hour / 2);
                this.keepList2[this.keepList2.length - 1].endHour = t;
              }
            }
          }
        }
      }
      // console.log('选中时间',this.keepList2)
      // console.log('选中时间',this.keepList)

      this.$emit('selectTime', this.keepList2)
    },
    // 组件百度所需要的时间字段  end    


  },
  destroyed() {// 离开后销毁监听鼠标事件
    // document.body.addEventListener('mousemove', this.mousemovefn)
    // document.body.addEventListener('mouseup', this.mouseUpfn)
  },

}
</script>
<style  scoped>
/* 广告版位-高级时间设置 */
.timers {
  width: 740px;
  padding: 20px;
  background-color: #ffffff;
}

.timers_t {
  display: flex;
  width: 700px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
}

.timers_tl {
  width: 100px;
  font-weight: 600;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-right: 1px solid #eee;
}

.timers_tr {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.timers_trt {
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.timers_trb {
  width: 600px;
  display: flex;
  height: 35px;
  align-items: center;
}

.timers_trb>span {
  width: 25px;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid #eee;
  height: 35px;
  line-height: 35px;
}

.timers_trt>h4 {
  width: 50%;
  text-align: center;
  border-right: 1px solid #eee;
  height: 35px;
  line-height: 35px;
  margin: 0;
}

.timers_trb {
  width: 100%;
  display: flex;
}

.timers_b {
  display: flex;
  border-left: 1px solid #eee;
}

.timers_bl {
  width: 100px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;
}

.timers_bl>span {
  height: 40px;
  line-height: 40px;
  width: 100px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.timers_br {
  widows: 600px;
}

.timers_br>div {
  display: inline-block;
  float: left;
  width: 12.46px !important;
  height: 40px;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  background-color: #fff;
}

.timers_br>div:hover {
  background-color: #eee;
}

.timedivact {
  background-color: #3399ff !important;
}

.selected {
  background-color: #3399ff !important;
}

.timerTips {
  display: flex;
  justify-content: space-between;
  width: 740px;
  padding: 0 30px;
  background-color: #ffffff;
  padding-bottom: 15px;
}

.timerTips_l {
  display: flex;
}

.timerTips_l>button {
  margin-right: 10px;
  cursor: default;
}

.timerTips_r>span {
  cursor: pointer;
  color: #3399ff;
}
</style>


