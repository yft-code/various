// import { login } from '@/api/user'
export default {
  namespaced: true,
  state:{
    token:localStorage.getItem('token')&&localStorage.getItem('token')||'',
    mount:'111'
   },
  actions: {
    // 登录时使用
    // login({ commit }, userInfo) {
    //   const { username, password } = userInfo
    //   return new Promise((resolve, reject) => {
    //     login({ username: username.trim(), password: password }).then(response => {
    //       const { data } = response
    //       localStorage.setItem('token',data.token)
    //       // commit('SET_TOKEN', data.token)
    //       setToken(data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
  },
  mutations: {},
 
  getters: {},
};
