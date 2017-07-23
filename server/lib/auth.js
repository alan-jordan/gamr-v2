const jwt = require('jsonwebtoken')
const passport = require('passport')

const crypto = require('./crypto')
const users = require('../db/users')

let connection = null
function createToken(user, secret) {
  return jwt.sign(user, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function handleError(err, req, res, next) {
  if (err) {
    return res.status(403).json({message: 'Access to this resource was denied.', error: err.message})
  }
  next()
}

function issueJwt(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({message: 'Authentication failed due to a server error.'})
    }

    if (!user) {
      return res.status(403).json({message: 'Authentication failed.', info: info.message})
    }

    const token = createToken(user, process.env.JWT_SECRET)
    res.json({message: 'Authentication successful.', token})
  })(req, res, next)
}

function verify(email, password, done) {
  users.getByEmail(email, req.app.get('connection'))
    .then(user => {
    if (user.length === 0) {
      return done(null, false, {message: 'Unrecognised user.'})
    }

    if (!crypto.verifyUser(user, password)) {
      return done(null, false, {message: 'Incorrect password.'})
    }
    delete user.hash
    done(null, user)
  }).catch(err => {
    done(err, false, {message: "Couldn't check your credentials with the database."})
  })
}

module.exports = {
  handleError,
  issueJwt,
  verify,
  createToken
}
