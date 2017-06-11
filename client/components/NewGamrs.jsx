import React from 'react'

const NewGamrs = (props) => {
  console.log(props);
  return (
    <div className='newGamrs'>
      <a className='newGamr' href='/'>gamr1 </a>
      <a className='newGamr' href='/'>gamr 2</a>
    </div>
  )
}

export default NewGamrs
