const files = require.context('.', true, /Main\.vue/)
const plugins = {}

files.keys().forEach(key => {
  const relativePath = key.replace(/(\.\/|\.vue)/g, '')
  const name = relativePath.split('/').shift()
  plugins[name] = files(key).default
})

export default plugins
