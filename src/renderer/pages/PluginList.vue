<template>
  <div class="plugin-list">
    <Row :space="10">
      <Cell :xs='24' :sm='12' :md='8' :lg='4' :xl='2'>
        <!-- 直接传个plugin对象 -->
        <plugin-item title="串口调试" content="串口数据监视" :node="true"></plugin-item>
      </Cell>
      <Cell :xs='24' :sm='12' :md='8' :lg='4' :xl='2'>
        <plugin-item title="字模提取" content="提取像素字体的字模" :node="true"></plugin-item>
      </Cell>
      <Cell :xs='24' :sm='12' :md='8' :lg='4' :xl='2'>
        <plugin-item title="颜色变换" content="计算色彩的darken或lighten" :node="false"></plugin-item>
      </Cell>
    </Row>
  </div>
</template>

<script>
import PluginItem from '@/components/PluginItem'

export default {
  components: {
    PluginItem
  }
}
</script>

<style lang="scss" scoped>
.plugin-list {
  box-sizing: border-box;
  padding: 1rem;
  &__item {

  }
}
</style>

