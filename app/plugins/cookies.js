const config = require('../config').cookieOptions

module.exports = {
  plugin: {
    name: 'cookies',
    register: (server, options) => {
      server.state('cookies_policy', config)

      server.ext('onPreResponse', (request, h) => {
        const statusCode = request.response.statusCode
        if (request.response.variety === 'view' && statusCode !== 404 && statusCode !== 500 && request.response.source.manager._context) {
          const cookiesPolicy = getCurrentPolicy(request, h)
          request.response.source.manager._context.cookiesPolicy = cookiesPolicy
        }
        return h.continue
      })
    }
  }
}

function getCurrentPolicy (request, h) {
  let cookiesPolicy = request.state.cookies_policy
  if (!cookiesPolicy) {
    cookiesPolicy = createDefaultPolicy(h)
  }
  return cookiesPolicy
}

function createDefaultPolicy (h) {
  const cookiesPolicy = { essential: true, confirmed: false, functional: false, analytics: false }
  h.state('cookies_policy', cookiesPolicy, config)
  return cookiesPolicy
}
