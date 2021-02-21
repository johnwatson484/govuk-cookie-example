const routes = [].concat(
  require('../routes/home'),
  require('../routes/static'),
  require('../routes/cookies'),
  require('../routes/reset')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
