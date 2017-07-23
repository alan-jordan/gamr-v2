var express = require('express')
var router = express.Router()
var create = require('../db/users').create
var auth = require('../lib/auth')
var verifyJwt = require('express-jwt')

router.post('/register', (req, res, next) => {
  create(req.body, req.app.get('db'))
  .then(() => {
    next()
  })
  .catch((err) => {
    if (err.errno) return res.sendStatus(409)
    else res.sendStatus(500)
  })
}, auth.issueJwt)

router.post('/login', auth.issueJwt)

// /routes below are private
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

router.get('/account', (req, res) => {
  res.json({
    message: 'This is a SECRET quote.',
    user: `Your user ID is: ${req.user.id}`
  })
})

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = router
