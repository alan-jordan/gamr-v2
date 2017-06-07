var knex = require('knex')
var config = require('../../../knexfile').test

module.exports = (test, createServer) => {
  console.log(createServer);
  test.beforeEach(function (t) {
    t.context.connection = knex(config)
    if (createServer) t.context.server = createServer(t.context.connection)
    return t.context.connection.migrate.latest()
      .then(function () {
        return t.context.connection.seed.run()
      })
  })

  // Destroy the database connection after each test.
  test.afterEach(function (t) {
    t.context.connection.destroy()
  })
}
