import React from 'react'

const NewUsers = (props) => {
  function renderUsers () {
    return props.users.map((user, i) => {
      return <li key={i}><a href='#'>{`${user.user_username}`}</a></li>
    })
  }

  return (
    <div>
      <ul className='newUsers'>
        {renderUsers()}
      </ul>
    </div>
  )
}

export default NewUsers
