import Vue from 'vue'
import App from './App.vue'
import Login from './views/Login.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import qs from 'qs'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// axios.defaults.baseURL='shirodemo'


new Vue({
  router,
  store,
  render: h => h(Login)
}).$mount('#app')
