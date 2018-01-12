import React from 'react';
import {Link} from 'react-router-dom';

export const CheeseburgerMenu = ({shown}) => {
  return(
      <div className="mainmenu" style={{visibility: shown}}>
        <div className="mainmenu-section">
          <Link to='/about'>
            <p className="mainmenu-section-p">About POWWOW!</p>
          </Link>
        </div>
      </div>
    )
}