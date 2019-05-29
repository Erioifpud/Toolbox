<template>
  <div class="plugin-list">
    <Row :space="10">
      <Cell :xs='24' :sm='12' :md='8' :lg='4' :xl='2' v-for="plugin in plugins" :key="plugin.id">
        <plugin-item :plugin="plugin"></plugin-item>
      </Cell>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PluginItem from '@/components/PluginItem'

export default {
  components: {
    PluginItem
  },
  data () {
    return {
      settings: [

      ]
    }
  },
  computed: {
    ...mapState({
      plugins: state => state.PluginList.plugins
    })
  }
}
</script>

<style lang="scss" scoped>
.plugin-list {
  box-sizing: border-box;
  // padding: 1rem;
  &__item {

  }
}
</style>

