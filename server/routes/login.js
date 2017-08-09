var express = require('express')
var passport = require('passport')
const router = express.Router()
const request = require('superagent')

require('dotenv').config()

request.post('/login', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/#/win',
    failureRedirect: '/#/lose',
    failureFlash: true
  })
})


module.exports = router
