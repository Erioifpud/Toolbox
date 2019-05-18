<template>
  <div class="home-button" flex="main:center cross:center" @click="clickHandler">
    <i class="icon" :class="icon"></i>
  </div>
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
      return this.isHome ? 'icon-home' : 'icon-arrow-left'
    }
  },
  methods: {
    clickHandler () {
      console.log(this.$route)
      console.log(this.$router)
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

