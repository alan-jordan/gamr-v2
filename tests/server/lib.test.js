import test from 'ava'

const errors = require('../../server/lib/errors')
const httpMocks = require('node-mocks-http')
const crypto = require('../../server/lib/crypto')

test.cb('Handle errors in GET /users', t => {
  let request = httpMocks.createRequest({
    method: 'GET',
    users: [
      { id: 1,
        user_username: 'eljordy'
      }
    ]
  })
  let response = httpMocks.createResponse()
  let next = () => {
    t.fail()
    t.end()
  }
  errors.handleRouteError('error', request, response, next)
  let body = JSON.parse(response._getData())
  t.is(response.statusCode, 500)
  t.is(body.message, 'Error:')
  t.end()
})

test.cb('Handle errors in GET /users', t => {
  let request = httpMocks.createRequest({
    method: 'GET',
    users: [
      { id: 1,
        user_username: 'eljordy'
      }
    ]
  })
  let response = httpMocks.createResponse()
  let next = () => {
    t.pass()
    t.end()
  }
  errors.handleRouteError(null, request, response, next)
})

test('crypto verifyUser', t => {
  let user = {
    'user_id': 2,
    'user_email': 'mario@gmail.com',
    'hash': crypto.getHash('password')
  }
  const passAuth = crypto.verifyUser(user, 'password')
  t.is(passAuth, true)
  const failAuth = crypto.verifyUser(user, 'wrongpassword')
  t.is(failAuth, false)
})
