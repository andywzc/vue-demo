// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'
import vueresource from 'vue-resource'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(mint)
Vue.use(vueresource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
