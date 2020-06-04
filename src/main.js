import Vue from 'vue'
import App from './App.vue'

var moment = require('moment');

Vue.use(moment);


new Vue({
  el: '#app',
  render: h => h(App)
})
