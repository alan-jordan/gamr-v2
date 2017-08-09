var express = require('express')
var passport = require('passport')
const router = express.Router()

require('dotenv').config()

router.post('/login', (req, res) => {
  console.log(req.body)
  passport.authenticate('local', {
    successRedirect: '/#/win',
    failureRedirect: '/#/lose',
    failureFlash: true
  })
})


module.exports = router
