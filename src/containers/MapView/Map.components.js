import React from 'react';



export const HeaderTemp = () => {
  return(
      <div className="header-temp">
        <img src="http://bit.ly/2AN2hqu" className="person-icon-temp"/>
        <div className="app-title-temp">PowWow</div>
        <img src="http://bit.ly/2At5KNM" alt="" className="header-menu-temp"/>
      </div>
    )
}

export const SearchTemp = () => {
  return(
      <div className="search-temp">
        <img src="http://bit.ly/2ygeReT" className="search-icon-temp"/>
        <input type="text" placeholder="Search" className="search-input-temp"/>
        <img src="http://bit.ly/2C1wORz" className="boxview-icon-temp"/>
        <img src="http://bit.ly/2AKsAgF" className="directions-icon-temp"/>
      </div>
    )
}

export const FooterMenuTemp = () => {
  return(
      <div className="footer-menu-temp">
        <img src="http://bit.ly/2kkOrDM" className="art-icon-temp"/>
        <div className="vLine-temp">
          <img src="http://bit.ly/2AN4KBb" alt="" className="camera-icon-temp"/>
        </div>
        <img src="http://bit.ly/2kdDrIk" className="community-icon-temp"/>
        <p className="temp-art-header">Art</p>
        <p className="temp-community-header">Community</p>
      </div>
    )
}