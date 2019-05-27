<template>
  <div class="flex-container">
    <div class="flex-container__options">
      <Select v-model="direction" :datas="directionList" placeholder="主轴" :null-option="false" v-tooltip="true" content="flex-direction"></Select>
      <Select v-model="justifyContent" :datas="justifyContentList" placeholder="主轴对齐" :null-option="false" v-tooltip="true" content="justify-content"></Select>
      <Select v-model="flexWrap" :datas="flexWrapList" placeholder="主轴换行" :null-option="false" v-tooltip="true" content="flex-wrap"></Select>
      <Select v-model="alignItems" :datas="alignItemsList" placeholder="交叉轴对齐" :null-option="false" v-tooltip="true" content="align-items"></Select>
      <Select v-model="alignContent" :datas="alignContentList" placeholder="多交叉轴对齐" :null-option="false" v-tooltip="true" content="align-content"></Select>
      <ButtonGroup>
        <Button icon="h-icon-inbox" color="primary" @click="handleAddItem">Add</Button>
        <Button icon="h-icon-trash" color="red" @click="handleRemoveItem">Remove</Button>
      </ButtonGroup>
    </div>
    <div class="flex-container__box" :style="style">
      <component v-for="(item, k) in children" :key="k" :is="item"></component>
    </div>
  </div>
</template>

<script>
import FlexItem from './FlexItem'

export default {
  components: {
    FlexItem
  },
  data () {
    return {
      children: [FlexItem],
      direction: 'row',
      directionList: [
        'row',
        'column',
        'row-reverse',
        'column-reverse'
      ],
      justifyContent: 'flex-start',
      justifyContentList: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ],
      flexWrap: 'nowrap',
      flexWrapList: [
        'nowrap',
        'wrap',
        'wrap-reverse'
      ],
      alignItems: 'stretch',
      alignItemsList: [
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch'
      ],
      alignContent: 'flex-start',
      alignContentList: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch'
      ]
    }
  },
  methods: {
    handleAddItem () {
      this.children.push(FlexItem)
    },
    handleRemoveItem () {
      if (this.children.length > 1) {
        this.children.pop()
      }
    }
  },
  computed: {
    style () {
      return `flex-direction: ${this.direction};
      justify-content: ${this.justifyContent};
      flex-wrap: ${this.flexWrap};
      align-items: ${this.alignItems};
      align-content: ${this.alignContent};
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-container {
  &__options {
    display: flex;
    justify-content: space-between;
  }

  &__box {
    height: 100vh;
    overflow: auto;
    display: flex;
    border: 1px solid #e2e2e2;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
  }
}
</style>
