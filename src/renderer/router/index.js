import Vue from 'vue'
import Router from 'vue-router'
import plugins from '@/plugins'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'plugin',
      component: require('@/pages/PluginPage').default,
      children: [
        {
          path: '',
          name: 'plugin-list',
          component: require('@/pages/PluginList').default
        },
        ...Object.entries(plugins).map(([k, v]) => {
          const Component = Vue.extend(v)
          const vm = new Component()
          if (vm.plugin.hide) {
            return null
          }
          store.commit('addPlugin', {
            ...vm.plugin,
            path: k
          })
          return {
            path: k,
            name: k,
            component: v
          }
        }).filter(route => !!route)
      ]
    },
    {
      path: '/a',
      name: 'landing-page2',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
