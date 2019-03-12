/*
入口js
 */
import App from './App.vue'
import Vue from 'vue'
import router from './router'

new Vue({
  el: "#app",
  render: h => h(App),
  router
})
