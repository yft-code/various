<template>
  <div>
   {{num}}
    <el-button @click="increase">-1</el-button>
   
    <el-button @click="stop">stop</el-button>
  </div>
</template>

<script>
import bus from '../utils/eventBus/index.js'
export default {
    name:'Wzj',
    data(){
        return{
            num:100
        }
    },
    methods:{
        stop(){
         
        },
        increase(){
       
        }
    }
}
</script>

<style>

</style>