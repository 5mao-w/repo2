import Vue from 'vue'//需要全局使用的组件就要引入到这个main.js里
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
