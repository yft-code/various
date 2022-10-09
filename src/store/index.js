import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    // 单一状态树 类似data
    state:{
        count:100,
        type:'800',
        user:'张三',
        name:'ddddd',
        step:'step'
    },
    // 数据管家(同步),唯一修改state地方,定义方法，通过commit提交，store.commit('changeCount')
    mutations:{
        edit(state,payload){
            state.name = payload.name
            console.log(payload) // 15或{age:15,sex:'男'}
        },
        addN(state,step){
           state.step=step
        },
       //载荷payload为一个对象    
        changeCountPayload(state,payload){
        state.count=payload.count
        },

         // 有参数的
         changeCountParams(state,value){
            state.count=value
            console.log('value',value);
        },
        // 无参数的
        changeCount(state) {
            state.count++
            // 添加一个state变量
            Vue.set(state,"age",15)
            console.log('state',state);
            // 删除
            // Vue.delete(state,'age')
          },
       


    },

     //异步请求，要改的state需要提交给mutations
    actions:{
        // 两种使用方法调用。
        aEdit(context,payload){
            setTimeout(()=>{
              context.commit('edit',payload)
            },2000)
        },
        // 带有传参的
        addNasync(context,step){
          setTimeout(()=>{
            context.commit('addN',step)
          })
        }
    },
//  vuex的计算属性,类似computed
getters:{
    nameInfo(state){
        return "姓名:"+state.count
    },
    fullInfo(state,getters){
        return getters.nameInfo+'年龄:'+state.type
    }  
},
// 拆分模块
modules:{

}
})
// const  store =new Vuex.Store({
//     state:{
//         count:100,
//     },

//     // 数据管家(同步),唯一修改state地方
//     mutations:{

//     },

//     // 异步请求，要改的state需要提交给mutations
//     actions:{

//     },
    
//     // vuex的计算属性(可认为是store的计算属性),类似computed
//      getters:{

//     }
// })

export default store