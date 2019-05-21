export default {
  data () {
    return {
      plugin: {
        name: '',
        desc: '',
        tags: [],
        settings: undefined,
        nodeOnly: false,
        hide: false
      }
    }
  },
  mounted () {
    this.$store.commit('addTitle', this.plugin.name)
  },
  beforeDestroy () {
    this.$store.commit('removeTitle')
  }
}
