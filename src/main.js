import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'; 
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Vuex,
  store,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
