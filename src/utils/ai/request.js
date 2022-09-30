// import axios from 'axios'
// import { Message } from 'element-ui'
// import router from '../../router'
// const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API,
//   timeout: 90000
// })

// // 请求方法处理
// service.interceptors.request.use(
//   config => {
//     config.headers['Authorization']='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRmYTNjMGFiLWY1ZDAtNDczNi04YzM0LWQ3MGFiODU3YTVhMiIsInVzZXJuYW1lIjoic3VwZXJBZG1pbiIsInRpbWVzdGFtcCI6MTY1ODEwNjQxNH0.lB02awV38tG52JHFSI1Zpmkys9d2lM780GL1n2KTh40'
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// // 返回响应处理
// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     return res
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// export default service
