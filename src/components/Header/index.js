import React from 'react';

export const Header = () => {
  return(
      <div className="header-menu">
        <div className="header-section header-profile-section">
          <img src="http://bit.ly/2AN2hqu"  alt="profile"  className="header-img header-profile-icon"/>
        </div>
        <div className="header-section header-logo-section">
          <div className="header-logo-title">POW!WOW!</div>
        </div>
        <div className="header-section header-menu-section">
          <img src="http://bit.ly/2At5KNM" alt="icon" className="header-img header-menu-icon"/>
        </div>
      </div>
    )
}