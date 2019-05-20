export default {
  data () {
    return {
      plugin: {
        name: '',
        desc: '',
        tags: [],
        settings: undefined,
        nodeOnly: false
      }
    }
  },
  activated () {
    this.$store.commit('addTitle', this.name)
  },
  deactivated () {
    this.$store.commit('removeTitle')
  }
}
