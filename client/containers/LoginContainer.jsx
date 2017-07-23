import React from 'react'
import {connect} from 'react-redux'

import LoginForm from '../components/LoginForm'

class LoginContainer extends React.Component {
  componentDidMount () {
  }

  render () {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    login: state.login
  }
}

LoginContainer = connect(mapStateToProps)(LoginContainer)
export default LoginContainer
