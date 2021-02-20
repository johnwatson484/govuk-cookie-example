const joi = require('joi')
const envs = ['development', 'test', 'production']

// Define config schema
const schema = joi.object().keys({
  port: joi.number().default(3000),
  env: joi.string().valid(...envs).default(envs[0]),
  serviceName: joi.string(),
  staticCacheTimeoutMillis: joi.number().default(15 * 60 * 1000),
  googleTagManagerKey: joi.string().default('')
})

// Build config
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  serviceName: 'Manage my cookies',
  staticCacheTimeoutMillis: process.env.STATIC_CACHE_TIMEOUT_IN_MILLIS,
  googleTagManagerKey: process.env.GOOGLE_TAG_MANAGER_KEY
}

// Validate config
const { error, value } = schema.validate(config)

// Throw if config is invalid
if (error) {
  throw new Error(`The server config is invalid. ${error.message}`)
}

module.exports = value
