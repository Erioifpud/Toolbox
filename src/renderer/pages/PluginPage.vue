<template>
  <Layout :headerFixed="true">
    <HHeader theme="white" style="border-bottom: 1px solid #e2ecf4; z-index: 1000" flex="dir:left box:justify">
      <home-button></home-button>
      <div class="toolbox__title" flex-box="1" style="text-align: center">
        {{ getTitle }}
      </div>
      <div class="toolbox__setting">
        <Badge :count="~~settingTips" :dot="true" position="right">
          <Button @click="open('right')" class="toolbox__setting-btn" icon="h-icon-setting" size="l" noBorder style="font-size: 1.25rem"></Button>
        </Badge>
      </div>
    </HHeader>
    <div class="toolbox__content">
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import HomeButton from '@/components/HomeButton'
import ModalGlobalSettings from '@/components/ModalGlobalSettings'

export default {
  components: {
    HomeButton,
    ModalGlobalSettings
  },
  computed: {
    ...mapGetters(['getTitle']),
    ...mapState({
      settingTips: state => state.Settings.settingTips
    })
  },
  methods: {
    open (place) {
      this.$Modal({
        type: `drawer-${place}`,
        width: 400,
        component: {
          vue: this.$settingsParse(),
          data: { subparam: 'test1' }, // 子组件使用props params参数获取数据，建议使用datas
          datas: { fruit: this.value } // 子组件直接使用 props 即可使用，兼容性 1.15.0+
        },
        events: {
          success: (modal, data) => {
            this.value = data
          }
        }
      })
    }
  },
  mounted () {
    console.log(this.settingTips)
  }
}
</script>

<style lang="scss" scoped>
.toolbox {
  &__content {
    padding: 1rem;
  }

  // &__setting-btn {
  //   padding: 10px !important;
  //   margin-left: 10px;
  //   margin-right: 10px;
  // }
}
</style>
