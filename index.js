const axios = require('axios')

const defaultConfig = {
  host: '0.0.0.0',
  port: '24220',
  checkInterval: 10000,
  callback: () => {},
}

let interval = null

function check(url, config) {
  axios.get(url)
    .then((res) => {
      config.callback({
        alive: true,
        plugins: res.data.plugins,
      })
    })
    .catch(() => {
      config.callback({
        alive: false,
        plugins: [],
      })
    })
}

function start(userConfig) {
  const config = { ...defaultConfig, ...userConfig }
  const url = `http://${config.host}:${config.port}/api/plugins.json`

  check(url, config)
  interval = setInterval(() => check(url, config), config.checkInterval)
}

function stop() {
  if (interval) clearInterval(interval)
}

module.exports = { start, stop }
