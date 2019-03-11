// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import axios from'axios';
import vuex from 'vuex';
import store from './vuex/store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.axios = axios;
Vue.use(ElementUI); 
Vue.use(vuex);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }, 
})
