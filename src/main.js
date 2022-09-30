import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import Vuex from 'vuex';
// 引入el-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex)
import axios from "axios";
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
