<template>
  <Button :icon="icon" size="l" noBorder style="font-size: 1.25rem" @click="handleClick"></Button>
</template>

<script>
export default {
  data () {
    return {
      isHome: true
    }
  },
  watch: {
    $route (route) {
      this.isHome = route.fullPath === '/'
    }
  },
  computed: {
    icon () {
      return this.isHome ? 'h-icon-home' : 'h-icon-left'
    }
  },
  methods: {
    handleClick () {
      if (!this.isHome) {
        this.$router.back()
      }
    }
  },
  created () {
    console.log(this.$router)
    this.isHome = this.$route.fullPath === '/'
  }
}
</script>

<style lang="scss" scoped>
.home-button {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  color: #3F536E;
  cursor: pointer;
}

.home-button:active {
  background-color: #fbfcfe;
}
</style>

