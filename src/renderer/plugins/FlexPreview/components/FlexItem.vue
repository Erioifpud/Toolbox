<template>
  <div class="flex-item" :style="style">
    <div class="flex-item__id">
      {{ _uid }}
    </div>
    <input type="text" v-model="flexBasis" v-tooltip="true" content="flex-basis"/>
    <NumberInput v-model="order" :useInt="true" :useOperate="true" v-tooltip="true" content="order"></NumberInput>
    <NumberInput v-model="flexGrow" :useInt="true" :useOperate="true" v-tooltip="true" content="flex-grow"></NumberInput>
    <NumberInput v-model="flexShrink" :useInt="true" :useOperate="true" v-tooltip="true" content="flex-shrink"></NumberInput>
    <Select v-model="alignSelf" :datas="alignSelfList" placeholder="align-self" :null-option="false" v-tooltip="true" content="独立align-self"></Select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      alignSelf: 0,
      order: 0,
      alignSelfList: [
        { key: 0, title: 'flex-start' },
        { key: 1, title: 'flex-end' },
        { key: 2, title: 'center' },
        { key: 3, title: 'baseline' },
        { key: 4, title: 'stretch' }
      ]
    }
  },
  computed: {
    style () {
      return `flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-self: ${this.alignSelfList.find(v => v.key === this.alignSelf).title};
      order: ${this.order};
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-item {
  border: 1px solid #66b668;
  border-radius: 0.25rem;
  padding: 0.5rem;

  &__id {
    text-align: center;
  }
}
</style>
