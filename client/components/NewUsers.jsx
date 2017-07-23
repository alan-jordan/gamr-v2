import React from 'react'

const NewUsers = (props) => {
  function renderUsers () {
    return props.users.map((user, i) => {
      return (
        <div className='newUserProfile'>
          <img src='http://via.placeholder.com/50x50' />
          <a href={`/#/users/${user.id}/library`}>{`${user.user_username}`}</a>
        </div>
      )
    })
  }

  return (
    <div className='newUsers'>
      <h2>New gamrs</h2>
        {renderUsers()}
    </div>
  )
}

export default NewUsers
