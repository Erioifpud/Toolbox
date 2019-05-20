import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import HeyUI from 'heyui'
import 'flex.css/dist/flex.css'
import 'flex.css/dist/data-flex.css'
import 'heyui/themes/var.js'
import 'heyui/themes/index.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(HeyUI)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
