var express = require('express')
var passport = require('passport')
const router = express.Router()

require('dotenv').config()

router.post('/login', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/#/win',
    failureRedirect: '/#/lose',
    failureFlash: true
  })
})


module.exports = router
