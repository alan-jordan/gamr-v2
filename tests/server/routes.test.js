var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)


test('GET /users/', t => {
  return request(t.context.app)
    .get('/api/v1/users')
    .expect(200)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.body.length, 2)
        resolve()
      })
    })
})