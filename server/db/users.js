// import bcrypt from 'bcryptjs'

function getUsers (connection) {
  return connection('users').select()
}

function getUserById (id, connection) {
  return connection('users')
    .where('id', id)
    .first()
}

// function checkPassword(plainTextPassword, hashedPassword) {
//   return bcrypt.compare(plainTextPassword, hashedPassword)
//     .then(res => {
//       console.log(res);
//       return res
//     })
// }

module.exports = {
  getUsers,
  getUserById
  // checkPassword
}
