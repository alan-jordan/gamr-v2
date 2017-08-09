import request from 'superagent'

export const loginUser = (creds) => {
  return (dispatch) => {
    request
      .post('/api/v1/login', creds)
      .end((err, res) => err ? console.log(err) : console.log(res.body))
  }
}
