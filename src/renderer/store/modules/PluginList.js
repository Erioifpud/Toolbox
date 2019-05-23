const state = {
  plugins: []
}

const mutations = {
  addPlugin (state, payload) {
    console.log('addPlugin')
    state.plugins.push({
      id: state.plugins.length,
      ...payload
    })
  }
}

const getters = {
  classifiedPlugins (state) {
    return state.plugins.reduce((a, b) => {
      b.tags.forEach(tag => {
        a[tag] || (a[tag] = []).push(b)
      })
      return a
    }, {})
  }
}

export default {
  state,
  mutations,
  getters
}
