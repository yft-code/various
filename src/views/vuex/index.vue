<template>
  <div>
      <p>
        <span>vuex的定义</span>
      </p>
      <p>
        <span>vuex的有点</span>
      </p> 
      <p>
        <span>什么情况下使用vuex</span>
      </p>
      <div>
        <p>使用方法:</p>
        <p>npm install vuex --save</p>
        <p>引入到main.js里面去,自行查看</p>
        <p>在src目录下创建一个store文件</p>
      </div>
      <div>
        案例1：计数器1
      </div>   
       <add-item></add-item>
       <sub-item></sub-item>
       <div>{{count}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import addItem from  '../../components/addItem.vue'
import subItem from '../../components/subItem.vue'
export default {
  components:{
    addItem,
    subItem
  },
  created(){
    console.log('this....',this.$store);
  },
  
  computed:{
    // 单独获取某个属性时的变化时
    // count () {
    //   return this.$store.state.count
    // },
    // 属性过多时，借助mapState 辅助函数帮助我们生成计算属性，需要先在页面引入import { mapState } from 'vuex'
    ...mapState(['count'])
  },
       data(){
        return{

        }
       }
}
</script>

<style>

</style>