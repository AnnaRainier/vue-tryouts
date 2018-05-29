import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import VueResource from 'vue-resource'
import axios from 'axios'

//Vue.use(VueResource)
//window.axios = axios; //первый способ зарегистр аксиос, тогда будем обращаться не через
// this.$http.get, а через axios.get
Vue.prototype.$http = axios; //второй способ, чтоб обращались через this.$http.get
//вместо создания прототипа можно скачать библиотеку vue-axios

new Vue({
  router,
  el: '#app',
  render: h => h(App) 
})
