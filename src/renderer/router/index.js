import Vue from 'vue'
import Router from 'vue-router'

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
        }
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
