import axios from 'axios'
import SocksProxyAgent from 'socks-proxy-agent'
import store from '@/store'

const proxyUrl = store.getters.proxyUrl
const httpsAgent = new SocksProxyAgent(proxyUrl)

const commonConfig = {
  timeout: 5000
}

const proxiedInstance = axios.create({
  ...commonConfig,
  httpsAgent
})

const instance = axios.create({
  ...commonConfig
})

function connect (method, url, params, proxy = false) {
  let ax = instance
  if (proxy) {
    ax = proxiedInstance
  }
  return ax.request({
    method,
    url,
    params
  })
}

export default connect
