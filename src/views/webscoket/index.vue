<template>
  <div>
       <div v-for="(item ,index, k) in list" :key="index">
      {{  item}}  {{ index }}  {{ k }}
      </div>
      <div>
        {{  testContentFormList }}
      </div>
     <div>
      {{ testContentFormListFilter }}
     </div>
      
  </div>
</template>

<script>
export default {
  data(){
      return {
        list:{
                    'id':1,
                    'user':'superadmin',
                    'cpu_name':'2017-07-11'
                },
        displayItem: ['cpu_name','disk_type','gpu_name','resolution','system_version'],
        testContentFormList: [
                {
                    label: "延迟",
                    propName: "delay",
                },
                {
                    label: "丢包率",
                    propName: "loss",
                },
                {
                    label: "kcp",
                    propName: "kcp",
                },
                {
                    label: "tcp",
                    propName: "tcp",
                },
                {
                    label: "工时",
                    propName: "work_time",
                },
                {
                    label: "表现",
                    propName: "msg",
                },
                
            ],
      }
  },
    computed:{
      testContentFormListFilter(){
            return this.testContentFormList.filter(item => {
                return item.label !== '表现'
            })
        },
      listFilter(){
        return this.list.filter((item,index,i)=>{
             return this.displayItem.index(index) !== -1
        })
      }
      
    }
}
</script>

<style>

</style>