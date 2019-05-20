<template>
  <Search class="search-field" @search="handleSearch" v-model="value" position="front" trigger-type="enter" placeholder="插件搜索..."></Search>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleSearch () {
      console.log(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-field {
 
}
</style>

