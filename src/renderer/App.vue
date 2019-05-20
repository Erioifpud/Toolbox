<template>
  <div id="app">
    <!-- <Layout :siderFixed="true" :siderCollapsed="siderCollapsed">
      <Sider theme="dark">
        <div class="layout-logo"></div>
        <Menu style="margin-top: 20px;" class="h-menu-dark" :datas="menuDatas" :inlineCollapsed="siderCollapsed"></Menu>
      </Sider>
      <Layout :headerFixed="true">
        <HHeader theme="white">
          <div style="width:100px;float:left;">
            <Button icon="h-icon-menu" size="l" noBorder style="font-size: 20px" @click="siderCollapsed=!siderCollapsed"></Button>
          </div>
        </HHeader>
        
        <Content>
          <div style="background: #f0f2f5; padding: 0px; height: 100%">
            123
          </div>
        </Content>
      </Layout>
    </Layout> -->

    <Layout :siderFixed="true" :siderCollapsed="siderCollapsed" class="toolbox">
      <Sider theme="dark">
        <div class="toolbox__search">
          <search-field></search-field>
        </div>
        <Menu class="h-menu-dark" :datas="menuDatas" :inlineCollapsed="siderCollapsed"></Menu>
      </Sider>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
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
        { title: '首页', key: 'welcome', icon: 'h-icon-home' },
        { title: '查询', key: 'search', icon: 'h-icon-search' },
        { title: '收藏', key: 'favor', icon: 'h-icon-star', count: 100, children: [{ title: '收藏-1', key: 'favor2-1' }] },
        { title: '任务', icon: 'h-icon-task', key: 'task' }
      ],
      datas: [
        { icon: 'h-icon-home' },
        { title: 'Component', icon: 'h-icon-complete', route: { name: 'Component' } },
        { title: 'Breadcrumb', icon: 'h-icon-star' }
      ]
    }
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

