import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "index" */ './components/views/Index.vue'),
      meta: {
        title: 'Welcome',
        description: 'A great website.',
        nav: true
      }
    }
  ]
})
