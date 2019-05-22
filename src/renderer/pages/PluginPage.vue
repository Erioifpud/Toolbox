<template>
  <Layout :headerFixed="true">
    <HHeader theme="white" style="border-bottom: 1px solid #e2ecf4; z-index: 1000" flex="dir:left box:justify">
      <home-button></home-button>
      <div class="toolbox__title" flex-box="1" style="text-align: center">
        {{ getTitle }}
      </div>
      <div class="toolbox__setting">
        <Button icon="h-icon-setting" size="l" noBorder style="font-size: 1.25rem"></Button>
      </div>
    </HHeader>
    <div class="toolbox__content">
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeButton from '@/components/HomeButton'

export default {
  components: {
    HomeButton
  },
  computed: {
    ...mapGetters(['getTitle'])
  }
}
</script>

<style lang="scss" scoped>
.toolbox {
  &__content {
    padding: 1rem;
  }
}
</style>
