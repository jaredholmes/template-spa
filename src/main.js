// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import commonComponents from './components/components'
import navRoutes from '@/navRoutes'
import '@/stylus/crisp.styl'

Vue.config.productionTip = false

// Register common components globally
commonComponents.forEach(component => {
  Vue.component(component.name, component)
})

// Navigation routes instance property
Vue.prototype.$navRoutes = navRoutes

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
