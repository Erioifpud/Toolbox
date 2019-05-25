<template>
  <div class="component-preview">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">色彩选择</span>
      </div>
      <div class="h-panel-body">
        <color-picker></color-picker>
      </div>
    </div>
  </div>
</template>

<script>
import plugin from '@/mixin/plugin'
import ColorPicker from './components/ColorPicker'

export default {
  mixins: [plugin],
  components: {
    ColorPicker
  },
  data () {
    return {
      plugin: {
        name: '组件预览',
        desc: 'Vue组件预览',
        tags: ['Vue', 'Preview']
      }
    }
  }
}
</script>

<style>

</style>
