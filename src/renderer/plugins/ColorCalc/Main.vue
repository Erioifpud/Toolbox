<template>
  <div class="color-calc">
    <color-preview :readOnly="true"></color-preview>
    <color-preview></color-preview>
    <color-preview :readOnly="true"></color-preview>
  </div>
</template>

<script>
import plugin from '@/mixin/plugin'
import ColorPreview from './ColorPreview'

export default {
  mixins: [plugin],
  components: {
    ColorPreview
  },
  data () {
    return {
      plugin: {
        name: '色彩计算',
        desc: '计算色彩的darken或lighten',
        tags: ['Palette', 'CSS']
      },
      hexColor: '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>
.color-calc {
  display: flex;
  justify-content: space-around;
}
</style>
