<template>
  <div>
    DC{{num}}
    <el-button @click="increase">-1</el-button>
     解绑：$off
    <el-button @click="stop">stop</el-button>
  </div>
</template>

<script>
import bus  from '../utils/eventBus/index.js'
export default {
    name:'Dc',
    data(){
        return{
            num:100
        }
    },
    methods:{
        stop(){
       
        },
        increase(){
            this.num--
            // 通过$emit调用里面的方法
            bus.$emit('sub',this.num)
           
        }
    }
}
</script>

<style>

</style>