// import Vue from 'vue'

function settingsParse (Vue) {
  return function (comps) {
    return Vue.component('virtual-modal', {
      template: '<Button>默认</Button>'
    })
  }
}

function install (V, options) {
  V.prototype.$settingsParse = settingsParse(V)
}

export default install
