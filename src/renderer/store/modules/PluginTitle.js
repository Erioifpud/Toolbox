const state = {
  titles: ['插件列表']
}

const mutations = {
  addTitle (state, title) {
    state.titles.push(title)
  },
  removeTitle (state) {
    if (state.title.length > 1) {
      state.titles.pop()
    }
  }
}

const getters = {
  getTitle (state) {
    return state.titles.slice(-1)[0]
  }
}

// const actions = {
//   someAsyncTask ({ commit }) {
//     // do something async
//     commit('INCREMENT_MAIN_COUNTER')
//   }
// }

export default {
  state,
  mutations,
  getters
}
