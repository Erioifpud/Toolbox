<template>
  <div class="component-preview">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">标题</span>
      </div>
      <div class="h-panel-body">
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
    </div>
  </div>
</template>

<script>
import plugin from '@/mixin/plugin'

export default {
  mixins: [plugin],
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
