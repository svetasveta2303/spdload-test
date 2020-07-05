import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';

import  router  from './router/index';
import store from './store';

Vue.use(BootstrapVue)
Vue.config.productionTip = false

import './assets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  render:(h) =>  h(App),
  router,
  store,
  
}).$mount('#app')
