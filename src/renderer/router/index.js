import Vue from 'vue'
import Router from 'vue-router'
import plugins from '@/plugins'
import store from '@/store'

Vue.use(Router)

const router = new Router({
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
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const route = to.matched.slice(-1)[0]
  if (!route) {
    return next()
  }
  const component = route.components.default
  if (!component) {
    return next()
  }
  // TODO
  const settings = component.data().settings
  if (settings) {
    store.commit('changeSettings', settings)
  } else {
    store.commit('changeSettings', null)
  }
  next()
})

export default router
