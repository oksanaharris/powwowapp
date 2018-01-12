import React from 'react';
import {Link} from 'react-router-dom';

export const MyProfileMenu = ({shown}) => {
  return(
      <div className="myprofile-menu" style={{visibility: shown}}>
        <div className="myprofile-menu-section">
          <Link to='/register'>
            <p className="myprofile-menu-section-p">Register</p>
          </Link>
        </div>
        <div className="myprofile-menu-section">
          <Link to='/login'>
            <p className="myprofile-menu-section-p">Log in</p>
          </Link>
        </div>
        <div className="myprofile-menu-section">
          <Link to='/logout'>
            <p className="myprofile-menu-section-p">Log out</p>
          </Link>
        </div>
        <div className="myprofile-menu-section">
          <Link to='/myactivity'>
            <p className="myprofile-menu-section-p">My acticity</p>
          </Link>
        </div>
        <div className="myprofile-menu-section">
          <Link to='/mysavedplaces'>
            <p className="myprofile-menu-section-p">Saved art</p>
          </Link>
        </div>
      </div>
    )
}