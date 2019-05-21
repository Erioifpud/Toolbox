const state = {
  plugins: []
}

const mutations = {
  addPlugin (state, payload) {
    state.plugins.push({
      id: state.plugins.length,
      ...payload
    })
  }
}

export default {
  state,
  mutations
}
