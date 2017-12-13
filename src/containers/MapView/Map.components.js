import React from 'react';
import DivIcon from 'react-leaflet-div-icon';
import { Marker, Popup } from 'react-leaflet';

export const MarkerIcon = ({art,handler}) => {
  const markerPosition = [art.Site.lat, art.Site.long]
  return(<DivIcon 
              className="div-icon-marker"
              onClick={(e) => handler(e,art)} 
              position={markerPosition}>
              <img 
                className="markerImg" 
                src={art.Artist.photourl} 
                alt="marker"/>
            </DivIcon>)
}

export const MarkerPopup = ({art,handler}) => {
  return (
        <div className="marker-artist-popup">
          <div className="marker-artist-popup-photo">
            <img src={art.Artist.photourl} alt=""/>
          </div>
          <div className="marker-artist-popup-details">
            <h4>{art.title}</h4>
            <p>{art.Artist.name}</p>
            <p>likes go here</p>
            <p>{art.Site.cross_street_one}</p>
          </div>
          <div className="marker-artist-popup-directions-button">
            <p>0.1 mi</p> {/*TODO: needs to be dynamic*/}
            <button
              onClick={(e)=>handler(e,art)} 
              className="marker-artist-popup-directions-button">
              Directions
            </button>
          </div>
        </div>
    )
}

  export const MyLocation = ({position})=> {
      return(<Marker position={position}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>)
    }









/*UNUSED COMPONENTS*/
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