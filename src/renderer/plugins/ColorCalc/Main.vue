<template>
  <div class="color-calc">
    <div class="color-calc__preview">
      <color-preview :hex="darkenColor" :readOnly="false"></color-preview>
      <color-preview v-model="hexColor"  ref="preview"></color-preview>
      <color-preview :hex="lightenColor" :readOnly="false"></color-preview>
    </div>
    <div class="color-calc__slider">
      <Slider v-model="percent"></Slider>
    </div>
  </div>
</template>

<script>
import plugin from '@/mixin/plugin'
import ColorPreview from './ColorPreview'

export default {
  mixins: [plugin],
  components: {
    ColorPreview
  },
  data () {
    return {
      plugin: {
        name: '亮度计算',
        desc: '计算色彩的亮度',
        tags: ['Color', 'CSS']
      },
      hexColor: '#000000',
      percent: 0
    }
  },
  computed: {
    darkenColor () {
      const preview = this.$refs.preview
      const payload = (preview && preview.hslvObj) || {h: 0, s: 0, l: 0}
      const percent = this.percent
      if (percent === 0) {
        return this.hexColor
      }
      return this.toHex(this.darken(payload, percent))
    },
    lightenColor () {
      const preview = this.$refs.preview
      const payload = (preview && preview.hslvObj) || {h: 0, s: 0, l: 0}
      const percent = this.percent
      if (percent === 0) {
        return this.hexColor
      }
      return this.toHex(this.lighten(payload, percent))
    }
  },
  methods: {
    // handleChange (payload) {
    //   const d = this.darken(payload, this.percent)
    //   const l = this.lighten(payload, this.percent)
    //   this.darkenColor = this.toHex(d)
    //   this.lightenColor = this.toHex(l)
    // },
    toHex ({ h, s, l }) {
      let r, g, b
      if (s === 0) {
        r = g = b = l
      } else {
        var hue2rgb = function (p, q, t) {
          if (t < 0) {
            t += 1
          } else if (t > 1) {
            t -= 1
          }
          if (t < 1 / 6) {
            return p + (q - p) * 6 * t
          }
          if (t < 1 / 2) {
            return q
          }
          if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6
          }
          return p
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h / 360 + 1 / 3)
        g = hue2rgb(p, q, h / 360)
        b = hue2rgb(p, q, h / 360 - 1 / 3)
      }
      r = Math.round(r * 255)
      g = Math.round(g * 255)
      b = Math.round(b * 255)
      return '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('')
    },
    darken (payload, percent) {
      const { h, s, l } = payload
      const newL = l - percent / 100
      if (newL > 0) {
        return { h, s, l: newL }
      }
      return { h, s, l: 0 }
    },
    lighten (payload, percent) {
      const { h, s, l } = payload
      const newL = l + percent / 100
      if (newL < 1) {
        return { h, s, l: newL }
      }
      return { h, s, l: 1 }
    }
  }
}
</script>

<style lang="scss" scoped>
.color-calc {
  &__preview {
    display: flex;
    justify-content: space-around;
  }

  &__slider {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
