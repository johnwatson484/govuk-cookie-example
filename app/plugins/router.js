const routes = [].concat(
  require('../routes/home'),
  require('../routes/static'),
  require('../routes/cookies')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
