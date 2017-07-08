import React from 'react'
import {Link} from 'react-router-dom'

const UserInfoLibrary = (props) => {
  return (
    <div className = "row" > <div className="col-lg-5">
      <div className="media">
        <a className="pull-left" href="#">
          <img className="media-object dp img-circle" src="https://pbs.twimg.com/profile_images/3100419678/7a778ab4ba1872fa320d62d9fe7b0398_400x400.jpeg" />
        </a>
        <div className="media-body">
          <h4 className="media-heading">{props.user.user.user_username}
            <small></small>
          </h4>
          {/* <h5>Software Developer at
            <a href="http://gridle.in">Gridle.in</a>
          </h5> */}
          <hr className='userBox' />
          {/* Consoles owned here? */}
          {/* <span className="label label-default">HTML5/CSS3</span>
          <span className="label label-default">jQuery</span>
          <span className="label label-info">CakePHP</span>
          <span className="label label-default">Android</span> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserInfoLibrary
