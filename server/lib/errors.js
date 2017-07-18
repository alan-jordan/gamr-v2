function handleRouteError (err, req, res, next) {
  if (err) {
    return res.status(500).json({
      message: 'Error:',
      error: err.message
    })
  }
  next()
}

module.exports = {
  handleRouteError
}
