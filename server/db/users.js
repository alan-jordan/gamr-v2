function getUsers (connection) {
  return connection('users').select()
}

function getUserById (id, connection) {
  return connection('users')
    .where('id', id)
    .first()
}

module.exports = {
  getUsers,
  getUserById
}
