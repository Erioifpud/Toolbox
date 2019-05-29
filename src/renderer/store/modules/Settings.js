const state = {
  globalSettings: {
    proxyHost: '127.0.0.1',
    proxyPort: 7891
  },
  settings: null,
  settingTips: false
}

const getters = {
  proxyUrl (state) {
    return `socks5://${state.proxyHost}:${state.proxyPort}`
  }
}

const mutations = {
  changeProxyHost (state, host) {
    if (typeof host !== 'string') {
      return
    }
    state.proxyHost = host
  },
  changeProxyPort (state, port) {
    if (typeof port !== 'number') {
      return
    }
    state.proxyPort = port
  },
  changeSettings (state, payload) {
    if (typeof payload !== 'object') {
      return
    }
    state.settingTips = !!payload
    state.settings = payload
  }
}

export default {
  state,
  getters,
  mutations
}
