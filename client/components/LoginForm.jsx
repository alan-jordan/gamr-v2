import React from 'react'
import {connect} from 'react-redux'
import { loginUser } from '../actions/auth'

class LoginForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    const creds = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    this.props.dispatch(loginUser(creds))
  }

  render() {
    return (
      <div className='row'>
        <div className='four columns offset-by-four'>
          <form className='loginForm' onSubmit={this.handleSubmit.bind(this)}>
            <input className='formInput' placeholder='email' name='email' type='email' />
            <input className='formInput' placeholder='password' name='password' type='password' />
            <br />
            <br />
            <input type='submit' value='Login' />
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(LoginForm)
