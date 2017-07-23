import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <a  className='headerItem' href='/'>gamr</a>
      </div>
      <div className='loginHeader'>
        <a className='headerItem' href='/#/login'>login</a>
      </div>
    </div>
  )
}

export default Header
