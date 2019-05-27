<template>
  <div class="flex-preview">
    <flex-container></flex-container>
  </div>
</template>

<script>
import plugin from '@/mixin/plugin'
import FlexContainer from './components/FlexContainer'

export default {
  mixins: [plugin],
  components: {
    FlexContainer
  },
  data () {
    return {
      plugin: {
        name: 'Flex预览',
        desc: '测试Flex布局的各项属性',
        tags: ['Flex', 'CSS']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-preview {

}
</style>
