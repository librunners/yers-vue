import Router from 'vue-router'
import Home from '../components/Home.vue'
import My from '../components/My.vue'

export default new Router({
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/my', name: 'My', component: My }
  ],
  linkActiveClass: 'mui-active'
})
