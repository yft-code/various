<template>
  <div  style="width:100%;height:20px;background:red" @click="test">
      
  </div>
</template>

<script>
export default {
  data(){
    return{
     arr:[1,2,3,4,5],
     value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
     value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }  
  },
     methods:{
      test(){
        console.log([...this.arr])
      }
     }
}
</script>

<style>

</style>