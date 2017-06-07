var express = require('express')
var router = express.Router()

var usersDb = require('../db/users')

router.get('/users', (req, res) => {
  usersDb.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
