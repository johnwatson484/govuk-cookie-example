module.exports = {
  method: 'GET',
  path: '/reset',
  options: {
    handler: (request, h) => {
      return h.redirect('/').unstate('cookies_policy')
    }
  }
}
