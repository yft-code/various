import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import Vuex from 'vuex';
import Plugin from 'v-fit-columns';
Vue.use(Plugin);
import '.././src/utils/permission'
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// 引入el-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex)
import axios from "axios";
Vue.prototype.$http = axios;
// 图片懒加载指令
Vue.directive('lazy', function (el, binding) {
   //保存图片地给 imgSrc

   const imgSrc = el.src

   //清空,这样就不会加载图片了

   el.src ='';

   //观察者 IntersectionObserver 是一个 api

   // 参数 entries 是一个数组,里面的 isIntersecting 属性 ----flase 为在可视区域外, true 表示出现在可视区域,可以解构赋值[{isIntersecting}]
console.log('el',el);


   const observer = new IntersectionObserver(([{isIntersecting}])=>{

   //元素出现在可视区域的时候以及离开可视区域的时候被触发(所以一开始就会先触发下)

   if(isIntersecting){

   //加载图片,把刚才保存的 imgSrc 赋值

   el.src =imgSrc;

   //图片加载玩,就得要停止观察了(这样图片就不会每次出现在可视区域或者离开都会触发了))

   observer.unobserve(el)

   }
   })

   //观察我锁定的元素

   observer.observe(el)
})
// 
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
