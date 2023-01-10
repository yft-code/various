<template>
  <div>
     <div>不带有校验</div>
     <div v-for="(item,index) in addArr" :key="index">
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="item.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="item.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onDelete(index,addArr)">删除</el-button>
    <el-button type="primary" @click="onSubmit">添加</el-button>
  </el-form-item>
 </el-form>
     </div>
     <div>带有校验</div>
       <el-form label-position="left" label-width="100px" :model="timeForm">
       <template v-for="(item, i) in timeForm.forms">
        <el-form-item :key="i" :label="item.labelName">
          <el-col :span="6">
            <el-form-item
              :rules="item.startRule"
              :prop="`forms.${i}.startValue`"
            >
              <el-time-picker
                style="width: 100%"
                @change="changeStart(item)"
                size="mini"
                :disabled="item.disabled"
                format="HH:mm:ss"
                value-format="HH:mm:ss"
                v-model="item.startValue"
                :picker-options="{
                  selectableRange: '00:00:00-23:59:59',
                }"
                placeholder="开始时间"
              >
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <div style="width: 100%; text-align: center">~</div>
          </el-col>
          <el-col :span="6">
            <el-form-item
              ref="monEnd"
              :rules="item.endRule"
              :prop="`forms.${i}.endValue`"
            >
              <el-time-picker
                style="width: 100%"
                @change="changeEnd(item)"
                :disabled="item.disabled"
                size="mini"
                v-model="item.endValue"
                format="HH:mm:ss"
                value-format="HH:mm:ss"
                :picker-options="{
                  selectableRange: '00:00:00-23:59:59',
                }"
                placeholder="结束时间"
              >
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col>
          <!-- 后面可以加一个插槽 -->
          <el-col :span="2">
            <el-checkbox
              @change="changeBox(item)"
              v-model="item.disabled"
            ></el-checkbox>
          </el-col>
          <el-col :span="3">
           <el-button @click="add">添加</el-button>
          </el-col>
            <el-col :span="3">
           <el-button @click="onDelete(i,timeForm.forms)">删除</el-button>
          </el-col>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
         timeForm: {
        forms: [
          {
            labelName: "星期一",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[0].endValue,
                    this.timeForm.forms[0].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[0].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[0].endValue,
                    this.timeForm.forms[0].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[0].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
          {
            labelName: "星期二",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[1].endValue,
                    this.timeForm.forms[1].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[1].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[1].endValue,
                    this.timeForm.forms[1].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[1].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
          {
            labelName: "星期三",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[2].endValue,
                    this.timeForm.forms[2].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[2].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[2].endValue,
                    this.timeForm.forms[2].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[2].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
          {
            labelName: "星期四",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[3].endValue,
                    this.timeForm.forms[3].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[3].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[3].endValue,
                    this.timeForm.forms[3].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[3].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
          {
            labelName: "星期五",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[4].endValue,
                    this.timeForm.forms[4].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[4].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[4].endValue,
                    this.timeForm.forms[4].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[4].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
          {
            labelName: "星期六",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[5].endValue,
                    this.timeForm.forms[5].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[5].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[5].endValue,
                    this.timeForm.forms[5].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[5].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
          {
            labelName: "星期日",
            startValue: "",
            endValue: "",
            disabled: false,
            //  校验规则
            startRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[6].endValue,
                    this.timeForm.forms[6].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[6].startValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
            // 规则必须也得定义在form绑定的model中
            endRule: {
              // ElementUI 表单校验规则的语法
              validator: (rule, value, callback) => {
                console.log("vaues", value);
                if (value == "") {
                  console.log("时间不能为空");
                } else if (
                  this.compareTime(
                    this.timeForm.forms[6].endValue,
                    this.timeForm.forms[6].startValue
                  )
                ) {
                  //  console.log('初期小于起始');
                  callback(new Error("初始时间要小于结束时间"));
                  this.$message.error("初始时间要小于结束时间");
                  this.timeForm.forms[6].endValue = "";
                } else {
                  callback();
                }
              },
              trigger: "change",
            },
          },
        ],
      },

        addArr:[{user:'1233',region:[]}],
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
        add(){

        },
         timeSec(time) {
      if (time !== null) {
        let s = "";
        let hour = time.split(":")[0];
        let min = time.split(":")[1];
        let sec = time.split(":")[2];
        s = Number(hour * 3600) + Number(min * 60) + Number(sec);
        return s;
      }
    },
    // 时间比较大小
    compareTime(time1, time2) {
      if (this.timeSec(time2) - this.timeSec(time1) >= 0) {
        return true;
      }
      return false;
    },
    changeBox(item) {
      if (item.disabled) {
        item.startValue = "";
        item.endValue = "";
      }
      this.$emit("change", item);
      console.log("item", item);
    },

    changeStart(item) {
      this.$emit("changeStart", item);
    },

    changeEnd(item) {
      this.$emit("changeEnd", item);
    },
        // 通过索引删除数组中的某一项
      onDelete(index,arr){
          arr.splice(index,1)
         console.log('index',index,this.addArr);
      },
      onSubmit() {
         this.addArr.push({
            user:'',
            region:[]
         })
      }
    }
}
</script>

<style>

</style>