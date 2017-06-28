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

router.get('/users/:id', (req, res) => {
  usersDb.getUserById(req.params.id, req.app.get('connection'))
    .then(function (user) {
      res.json(user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/latestusers', (req, res) => {
  usersDb.getNumUsers(3, req.app.get('connection'))
    .then((users) => {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
