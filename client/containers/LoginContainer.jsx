import React from 'react'
import {connect} from 'react-redux'


class LoginContainer extends React.Component {
  componentDidMount () {
  }

  render () {
    return (
      <div>I'm a login container</div>
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
