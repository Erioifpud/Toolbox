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
      <input type="text" v-model="hsl" readonly/>
    </div>
    <div class="color-preview__palette" :style="style"></div>
  </div>
</template>

<script>
export default {
  model: {
    event: 'valueChange',
    prop: 'hex'
  },
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    hex: {
      type: String,
      default: '#000000'
    }
  },
  data () {
    return {
      hexColor: this.hex
    }
  },
  watch: {
    hex (val) {
      this.hexColor = val
    },
    hexColor (val) {
      this.$emit('hex-change', {
        ...this.hslvObj,
        ...this.rgbObj,
        hex: val
      })
      this.$emit('valueChange', val)
    }
  },
  // methods: {
  //   handleInput (v) {
  //     console.log(v)
  //   }
  // },
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
    hslvObj () {
      const { r, g, b } = this.rgbObj
      const cMax = Math.max(r, g, b)
      const cMin = Math.min(r, g, b)
      const delta = cMax - cMin
      const hueCalc = {
        [r]: 60 * (((g - b) / delta) % 6),
        [g]: 60 * ((b - r) / delta) + 120,
        [b]: 60 * ((r - g) / delta) + 240
      }
      const hue = hueCalc[cMax] || 0
      const saturation = cMax ? (delta / cMax) : 0
      const value = cMax / 255
      const light = (cMax + cMin) / 510
      return {
        h: hue,
        s: saturation,
        l: light,
        v: value
      }
    },
    hsl () {
      const { h, s, l } = this.hslvObj
      return `${Math.round(h)}, ${s.toPrecision(2)}, ${l.toPrecision(2)}`
    },
    hsv () {
      const { h, s, v } = this.hslvObj
      return `${Math.round(h)}, ${s.toPrecision(2)}, ${v.toPrecision(2)}`
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
