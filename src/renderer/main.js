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
import connect from '@/connection'
import settings from '@/utils/settings'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(HeyUI)
Vue.use(settings)
Vue.prototype.$connect = connect

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
