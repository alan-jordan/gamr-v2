import React from 'react'

const NewUsers = (props) => {
  function renderUsers () {
    return props.users.map((user, i) => {
      return (
        <div key={i} className='newUserProfile'>
          <div className='newUserImage'>
            <img src='http://via.placeholder.com/50x50' />
          </div>
          <div className='newUserInfo'>
            <a href={`/#/users/${user.id}/library`}>{`${user.user_username}`}</a>
          </div>
        </div>
      )
    })
  }

  return (
    <div className='newUsers'>
      <h2>New gamrs</h2>
        {renderUsers()}
        <br/>
        <a href="/#/register">You? Register now</a>
    </div>
  )
}

export default NewUsers
