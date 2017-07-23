import React from 'react'
import {connect} from 'react-redux'

class LoginForm extends React.Component {

  render() {
    return (
      <div className='loginForm'>
        I'm a login form
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {login: state.login}
}

export default connect(mapStateToProps)(LoginForm)
