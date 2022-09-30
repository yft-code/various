import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    // 单一状态树 类似data
    state:{
        count:100,
    },
    // 数据管家(同步),唯一修改state地方,定义方法，通过commit提交，store.commit('changeCount')
    mutations:{
        // 无参数的
        changeCount(state) {
            state.count++
          },
        //   有参数的
        changeCountParams(state,value){
            state.count=value
            console.log('value',value);
        },

        // 载荷  payload为一个对象
        changeCountPayload(state,payload){
            state.count=payload.count
            console.log('value',payload);
        },
    },
//    异步请求，要改的state需要提交给mutations
    actions:{

    },
//  vuex的计算属性,类似computed
getters:{

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