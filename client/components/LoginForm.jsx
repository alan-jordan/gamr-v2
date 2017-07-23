import React from 'react'
import {connect} from 'react-redux'

class LoginForm extends React.Component {

  render() {
    return (
      <div className='loginForm'>
        <form>
          <label>E-mail</label>
          <input className='formInput' name='email' type='email' />
          <label>Passport</label>
          <input className='formInput' name='password' type='password' />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {login: state.login}
}

export default connect(mapStateToProps)(LoginForm)
