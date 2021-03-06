import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element/index'
import './styles/reset.scss'
Vue.config.productionTip = false
let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue
