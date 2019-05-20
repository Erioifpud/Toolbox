<template>
  <div class="h-panel plugin-item">
    <div class="h-panel-bar">
      <span class="h-panel-title">{{ title }}</span>
      <span class="h-panel-right">
        <span class="h-tag h-tag-yellow" v-if="node">Node.js</span>
        <span class="h-tag h-tag-primary" v-else>All</span>
        <!-- <a @click="handleClick">More</a> -->
      </span>
    </div>
    <div class="h-panel-body">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    node: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick () {
      this.$Modal({
        title: 'Js',
        content: '这是使用Js调用的弹出框'
      })
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
