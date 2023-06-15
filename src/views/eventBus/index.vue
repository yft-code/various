<template>
  <div>
 <Dc>
 </Dc>
 <Yyh></Yyh>
<el-button @click="cbs(function(){
     
})"></el-button>
  </div>
</template>

<script>
import Dc from '../../components/Dc.vue'
import Yyh from '../../components/Yyh.vue'
export default {
components:{
    Dc,Yyh
},
data(){
  return{
         nums:[]
  }
},
methods:{
    cbs(cb){
         let name='2222'
         this.nums[name]=cb
         console.log('cb',cb);
    }
}
}
</script>

<style>

</style>