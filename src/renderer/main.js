import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import AtComponents from 'at-ui'
// import 'at-ui-style'
import 'at-ui-style/src/index.scss'
import 'flex.css/dist/flex.css'
import 'flex.css/dist/data-flex.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(AtComponents)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
