// import bcrypt from 'bcryptjs'

function getUsers (connection, callback) {
  return connection('users')
    .select()
    .on('query-error', (error, obj) => {
      return new Error(`Error: ${error}`)
    })
}

function getUserById (id, connection) {
  return connection('users')
    .where('id', id)
    .first()
}

function getNumUsers (num, connection) {
  return connection('users').limit(num).orderBy('user_date_registered', 'desc')
}

function getUserGames (id, connection) {
  return connection('user_games')
    .where('user_id', id)
}

module.exports = {
  getUsers,
  getUserById,
  getNumUsers,
  getUserGames
  // checkPassword
}
