<template>
  <div>
    {{num}}
    <el-button @click="increase">-1</el-button>
    <el-button @click="stop">stop</el-button>
  </div>
</template>

<script>
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

        }
    }
}
</script>

<style>

</style>