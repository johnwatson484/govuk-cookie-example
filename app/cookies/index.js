const config = require('../config').cookieOptions

function getCurrentPolicy (request, h) {
  let cookiesPolicy = request.state.cookies_policy
  if (!cookiesPolicy) {
    cookiesPolicy = createDefaultPolicy(h)
  }
  return cookiesPolicy
}

function createDefaultPolicy (h) {
  const cookiesPolicy = { confirmed: false, essential: true, analytics: false, functional: false }
  h.state('cookies_policy', cookiesPolicy, config)
  return cookiesPolicy
}

function updatePolicy (request, h, analytics, functional) {
  let cookiesPolicy = request.state.cookies_policy
  if (!cookiesPolicy) {
    cookiesPolicy = createDefaultPolicy(h)
  }

  cookiesPolicy.analytics = analytics
  cookiesPolicy.functional = functional
  cookiesPolicy.confirmed = true

  h.state('cookies_policy', cookiesPolicy, config)
}

module.exports = {
  getCurrentPolicy,
  updatePolicy
}
