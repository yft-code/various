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
        <p>commit方法提交,mutations接收,而且state属性只能通过mutations改变</p>
        <p>{{fullInfo}}</p>
      </div>
      <div>
        案例1:计数器1
      </div>    
       <add-item></add-item>
       <sub-item></sub-item>
       <div>{{this.$store.getters.fullInfo}}</div>
       <div>{{this.$store.state.count}}</div>

       <div @click="edit({name:'mapMutations'})">{{count}}</div>
       <div>
       </div>
  
      </div>

</template>
<script>
import { mapMutations,mapState,mapActions,mapGetters} from 'vuex'

import addItem from  '../../components/addItem.vue'
import subItem from '../../components/subItem.vue'
export default {
  components:{
    addItem,
    subItem
  },
  created(){
    this.editN()
    this.expend()
    console.log('this....',this.$store);
  },
  
  computed:{
    // 单独获取某个属性时的变化时
    count () {
      return this.$store.state.count
    },
    ...mapGetters(['fullInfo']),
    // 属性过多时，借助mapState 辅助函数帮助我们生成计算属性，需要先在页面引入import { mapState } from 'vuex'
    ...mapState(['count','type','user','name','step'])
    // ...mapState({
   
    // })
  },
   data(){
    return{
      }
    },
       methods:{
        ...mapMutations(['edit','addN']),
        editN(){
            this.edit({name:'mapMutations'})
        },
        ...mapActions(['addNasync']),
        // 方法里面调用，上面html标签应用
        addNasync(){
           this.addNasync('dhgahdgshadg')
        },
        //相当于在methods注入了一个方法，直接使用this.addNasync,然后按照格式传参即可

        expend(){
        // this.$store.dispatch('aEdit',{name:15})
        this.$store.dispatch('addNasync','44-step')
      }
    }
}
</script>

<style>

</style>