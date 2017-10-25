import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'http://192.168.0.29:10000/';

new Vue({
  el: '#app',
  render: h => h(App)
})
