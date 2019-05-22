<template>
  <div class="color-preview">
    <div class="h-input-group">
      <span class="h-input-addon">HEX</span>
      <input type="text" v-model="hexColor" :readonly="readOnly"/>
    </div>
    <div class="h-input-group">
      <span class="h-input-addon">RGB</span>
      <input type="text" v-model="rgb" readonly=/>
    </div>
    <div class="h-input-group">
      <span class="h-input-addon">HSV</span>
      <input type="text" v-model="hsv" readonly/>
    </div>
    <div class="h-input-group">
      <span class="h-input-addon">HSL</span>
      <input type="text" v-model="hslColor" readonly/>
    </div>
    <div class="color-preview__palette" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hexColor: '#000000',
      rgbColor: '',
      hsvColor: '',
      hslColor: ''
    }
  },
  computed: {
    style () {
      return `background-color: ${this.hexColor}`
    },
    rgbObj () {
      const hexArr = this.hexColor.replace(/#/g, '').match(/.{1,2}/g) || []
      const rgbArr = hexArr.map(val => Number.parseInt(val, 16))
      const [r, g, b] = rgbArr
      return { r, g, b }
    },
    rgb () {
      const { r, g, b } = this.rgbObj
      return `${r}, ${g}, ${b}`
    },
    hsv () {
      const { r, g, b } = this.rgbObj
      const [rp, gp, bp] = [r / 255, g / 255, b / 255]
      const cMax = Math.max(rp, gp, bp)
      const cMin = Math.min(rp, gp, bp)
      const delta = cMax - cMin
      const hueCalc = {
        [rp]: 60 * (((gp - bp) / delta) % 6),
        [gp]: ((bp - rp) / delta) + 120,
        [bp]: ((rp - gp) / delta) + 240
      }
      const hue = hueCalc[]

    }
  }
}
</script>

<style lang="scss" scoped>
.color-preview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    padding-bottom: 1rem;
  }

  &__palette {
    height: 2rem;
    border-radius: 0.25rem;
  }
}
</style>
