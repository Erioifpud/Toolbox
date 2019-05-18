<template>
  <div id="app">
    <div class="toolbox" flex="dir:top box:first">
      <div class="header" flex="box:mean">
        <home-button flex-box="0"></home-button>
        <at-menu mode="horizontal" active-name="1" theme="light" :router="true">
          <at-menu-item name="1" to="/"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
          <at-menu-item name="2" to="/a"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
        </at-menu>
      </div>
      <div class="content" flex="box:mean cross:stretch">
        <at-menu mode="vertical" active-name="1" theme="light" flex-box="0">
          <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
          <at-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
        </at-menu>
        <router-view></router-view>
      </div>
    </div>
    
    
    
  </div>
</template>

<script>
import HomeButton from '@/components/HomeButton'

export default {
  name: 'toolbox',
  components: {
    HomeButton
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}

.toolbox {
  height: 100%;
}
</style>

