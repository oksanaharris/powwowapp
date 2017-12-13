import React from 'react';
import DivIcon from 'react-leaflet-div-icon';

export const MarkerIcon = ({art}) => {
  const markerPosition = [art.Site.lat, art.Site.long]
  return(<DivIcon 
              className="div-icon-marker" 
              position={markerPosition}>
              <img 
                className="markerImg" 
                src={art.Artist.photourl} 
                alt="marker"/>
            </DivIcon>)
}

export const HeaderTemp = () => {
  return(
      <div className="header-temp">
        <img src="http://bit.ly/2AN2hqu"  alt="icon"  className="person-icon-temp"/>
        <div className="app-title-temp">PowWow</div>
        <img src="http://bit.ly/2At5KNM" alt="icon" className="header-menu-temp"/>
      </div>
    )
}

export const SearchTemp = () => {
  return(
      <div className="search-temp">
        <img src="http://bit.ly/2ygeReT"  alt="icon"  className="search-icon-temp"/>
        <input type="text" placeholder="Search" className="search-input-temp"/>
        <img src="http://bit.ly/2C1wORz"  alt="icon"  className="boxview-icon-temp"/>
        <img src="http://bit.ly/2AKsAgF"  alt="icon"  className="directions-icon-temp"/>
      </div>
    )
}

export const FooterMenuTemp = () => {
  return(
      <div className="footer-menu-temp">
        <img src="http://bit.ly/2kkOrDM" alt="icon"  className="art-icon-temp"/>
        <div className="vLine-temp">
          <img src="http://bit.ly/2AN4KBb"  alt="icon"  className="camera-icon-temp"/>
        </div>
        <img src="http://bit.ly/2kdDrIk"  alt="icon"  className="community-icon-temp"/>
        <p className="temp-art-header">Art</p>
        <p className="temp-community-header">Community</p>
      </div>
    )
}