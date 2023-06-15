<template>
  <div>
   Yyh {{num}}
    <el-button @click="increase">-1</el-button>
    <el-button @click="stop">stop</el-button>
  </div>
</template>

<script>
import bus from '../utils/eventBus/index.js'
export default {
    name:'Yyh',
    data(){
        return{
            num:100
        }
    },
    created(){
        bus.$on('sub',(num)=>{
        console.log('aaaaa');
        this.num=num
       })
     
    },
    methods:{
      stop(){
        //通过$on将方法存入到sub里面去
      //   bus.$on('sub',(num)=>{
      //   console.log('aaaaa');
      //   this.num=num
      //  })
        },
        increase(){

        }
    }
}
</script>

<style>

</style>