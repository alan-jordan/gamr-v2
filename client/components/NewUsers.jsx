import React from 'react'

const NewUsers = (props) => {
  function renderUsers () {
    return props.users.map(user => {
      return <li><a href='#'>{`${user.user_username}`}</a></li>
    })
  }

  return (
    <div className='newUsers'>
      <ul>
        {renderUsers()}
      </ul>
    </div>
  )
}

export default NewUsers
