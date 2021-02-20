const ViewModel = require('./models/cookies-policy')
const config = require('../config').cookieOptions
const joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/cookies',
  handler: (request, h) => {
    return h.view('cookies/cookie-policy', new ViewModel(request.state.cookies_policy, request.query.updated))
  }
}, {
  method: 'POST',
  path: '/cookies',
  options: {
    validate: {
      payload: joi.object({
        analytics: joi.boolean(),
        functional: joi.boolean(),
        async: joi.boolean().default(false)
      })
    },
    handler: (request, h) => {
      const cookiesPolicy = request.state.cookies_policy
      cookiesPolicy.analytics = request.payload.analytics
      cookiesPolicy.functional = request.payload.functional
      cookiesPolicy.confirmed = true

      h.state('cookies_policy', cookiesPolicy, config)

      if (request.payload.async) {
        return h.response()
      }
      return h.redirect('cookies/?updated=true')
    }
  }
}]
