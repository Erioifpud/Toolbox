<template>
  <div id="app">
    <Layout :siderFixed="true" :siderCollapsed="siderCollapsed" class="toolbox">
      <Sider theme="dark">
        <div class="toolbox__search">
          <search-field></search-field>
        </div>
        <Menu :accordion="true" class="h-menu-dark" @click="handleMenuClick" :datas="menuDatas" :inlineCollapsed="siderCollapsed"></Menu>
      </Sider>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeButton from '@/components/HomeButton'
import SearchField from '@/components/SearchField'

export default {
  name: 'toolbox',
  components: {
    HomeButton,
    SearchField
  },
  data () {
    return {
      siderCollapsed: false,
      menuDatas: [
        { title: '首页', key: 'home', icon: 'h-icon-home' }
      ],
      datas: [
        { icon: 'h-icon-home' },
        { title: 'Component', icon: 'h-icon-complete', route: { name: 'Component' } },
        { title: 'Breadcrumb', icon: 'h-icon-star' }
      ]
    }
  },
  methods: {
    handleMenuClick (val) {
      if (val.key === 'home') {
        this.$router.push('/')
        return
      }
      if (val.value.isPlugin) {
        const path = val.value.path
        this.$router.push(path)
      }
    },
    appendTagItems () {
      const item = Object.entries(this.classifiedPlugins).map(([key, val]) => {
        return {
          title: `# ${key}`,
          key,
          icon: 'h-icon-link',
          children: val.map(v => ({
            title: v.name,
            key: v.id,
            path: v.path,
            isPlugin: true
          }))
        }
      })
      this.menuDatas.push(...item)
    }
  },
  computed: {
    ...mapGetters(['classifiedPlugins'])
  },
  mounted () {
    this.appendTagItems()
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}

.toolbox {
  height: 100%;

  &__search {
    padding: 1rem;
  }
}
</style>

