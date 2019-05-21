<template>
  <div>
    456
  </div>
</template>

<script>
import plugin from '@/mixin/plugin'

export default {
  mixins: [plugin],
  data () {
    return {
      plugin: {
        name: '色彩计算',
        desc: '计算色彩的darken或lighten',
        tags: ['Palette', 'CSS']
      }
    }
  }
}
</script>

<style>

</style>
