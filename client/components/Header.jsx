import React from 'react'

const Header = () => {
  return (
    <div className='row header'>
      <div className='ten columns'>
        <a  className='logo' href='/'>gamr</a>
      </div>
      <div className='two columns'>
        <a className='loginHeader' href='/#/login'>login</a>
      </div>
    </div>
  )
}

export default Header
