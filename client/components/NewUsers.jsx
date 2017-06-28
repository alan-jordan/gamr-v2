import React from 'react'

const NewUsers = (props) => {
  function renderUsers () {
    return props.users.map((user, i) => {
      return (
        <li key={i}><a href={`/users/${user.id}/library`}>{`${user.user_username}`}</a></li>
      )
    })
  }

  return (
    <ul className='newUsers'>
      {renderUsers()}
    </ul>
  )
}

export default NewUsers
