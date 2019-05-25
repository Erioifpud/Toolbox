<template>
  <div class="color-picker">
    <canvas ref="hueCanvas"></canvas>
    <canvas ref="saturationCanvas"></canvas>
    <canvas ref="alphaCanvas"></canvas>
    <canvas ref="colorCanvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    this.renderHue()
    this.renderSaturation()
    this.renderAlpha()
    this.renderColor()
  },
  methods: {
    renderSaturation () {
      const canvas = this.$refs.hueCanvas
      const ctx = canvas.getContext('2d')
      const size = 300
      ctx.fillStyle = 'rgb(227,160,71)'
      ctx.fillRect(0, 0, size, size)
      this.createLinearGradient('l', ctx, size, size, '#FFFFFF', 'rgba(255,255,255,0)')
      this.createLinearGradient('p', ctx, size, size, 'rgba(0,0,0,0)', '#000000')
    },
    createLinearGradient (direction, ctx, width, height, color1, color2) {
      // l 横向 p 纵向
      const isL = direction === 'l'
      const gradient = ctx.createLinearGradient(0, 0, isL ? width : 0, isL ? 0 : height)
      gradient.addColorStop(0.01, color1)
      gradient.addColorStop(0.99, color2)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    },
    renderHue () {
      const canvas = this.$refs.saturationCanvas
      const ctx = canvas.getContext('2d')
      const width = 300
      const height = 300
      canvas.width = width
      canvas.height = height
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#FF0000') // 红
      gradient.addColorStop(0.17 * 1, '#FF00FF') // 紫
      gradient.addColorStop(0.17 * 2, '#0000FF') // 蓝
      gradient.addColorStop(0.17 * 3, '#00FFFF') // 青
      gradient.addColorStop(0.17 * 4, '#00FF00') // 绿
      gradient.addColorStop(0.17 * 5, '#FFFF00') // 黄
      gradient.addColorStop(1, '#FF0000') // 红
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    },
    renderAlpha () {
      const canvas = this.$refs.alphaCanvas
      const ctx = canvas.getContext('2d')
      const width = 300
      const height = 300
      canvas.width = width
      canvas.height = height
      const bgCanvas = this.renderTransparentBackground(10)

      ctx.fillStyle = ctx.createPattern(bgCanvas, 'repeat')
      ctx.fillRect(0, 0, width, height)
      this.createLinearGradient('p', ctx, width, height, 'rgba(255,255,255,0)', 'rgb(227,160,71)')
    },
    renderTransparentBackground (size) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const doubleSize = size * 2
      canvas.width = doubleSize
      canvas.height = doubleSize
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, doubleSize, doubleSize)
      ctx.fillStyle = '#ccd5db'
      ctx.fillRect(0, 0, size, size)
      ctx.fillRect(size, size, size, size)
      return canvas
    },
    renderColor () {
      const canvas = this.$refs.colorCanvas
      const ctx = canvas.getContext('2d')
      const width = 300
      const height = 300
      canvas.width = width
      canvas.height = height
      const bgCanvas = this.renderTransparentBackground(10)

      ctx.fillStyle = ctx.createPattern(bgCanvas, 'repeat')
      ctx.fillRect(0, 0, width, height)
    }
  }
}
</script>

<style>

</style>
