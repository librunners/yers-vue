// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import './libs/mui/css/mui.css'

FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
