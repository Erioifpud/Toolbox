<template>
  <div class="h-panel plugin-item" @click="handleClick">
    <div class="h-panel-bar">
      <span class="h-panel-title">{{ plugin.name }}</span>
      <span class="h-panel-right">
        <span class="h-tag h-tag-yellow" v-if="plugin.nodeOnly">Node.js</span>
        <span class="h-tag h-tag-primary" v-else>All</span>
        <!-- <a @click="handleClick">More</a> -->
      </span>
    </div>
    <div class="h-panel-body">
      {{ plugin.desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plugin: {
      type: Object,
      required: true,
      validator (val) {
        const { name, desc } = val
        if (!name || !desc) {
          return false
        }
        return true
      }
    }
  },
  methods: {
    handleClick () {
      this.$router.push(this.plugin.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.plugin-item {
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 0 16px 0 hsla(0, 0%, 39%, 0.2);
  }

  &__tags {
    overflow: hidden;
  }
}
</style>
