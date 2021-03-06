import React from 'react';
import DivIcon from 'react-leaflet-div-icon';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const sources = {
  search: 'http://bit.ly/2ygeReT',
  return: "http://bit.ly/2eSuUrX",
  end: "http://bit.ly/2BsFouX",
  go: "https://cdn3.iconfinder.com/data/icons/line/36/arrow_right-512.png",
  icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF"
}

var myIcon = L.icon({
    iconUrl: sources.icon,
    iconSize: [32, 48],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

export const MarkerIcon = ({art,handler}) => {
  const markerPosition = [art.Site.lat, art.Site.long]
  return(<Marker 
              className="div-icon-marker"
              onClick={(e) => handler(e,art)} 
              position={markerPosition}>
              <img 
                className="markerImg" 
                src={art.Artist.photourl} 
                alt="marker"/>
            </Marker>)
}

export const MarkerPopup = ({art,handler}) => {
  if(art.status === 0){
    return (
      <div className="marker-artist-popup-noresults">
          <h4>No results found...</h4>
      </div>


      )
  }
  return (
        <div className="marker-artist-popup">
          <div className="marker-artist-popup-photo">
            <img src={art.url} alt=""/>
          </div>
          <div className="marker-artist-popup-details">
            <h4>{art.title}</h4>
            <p>{art.artistName}</p>
            <p>likes go here</p>
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
      return(<Marker icon={myIcon}className="mylocation" position={position}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>)
    }


export const SearchField = ({handler,query,active,begin,end}) => {
  const source = active ? sources.return : sources.search;
  return (
        <div className="search-temp">
          <img src={source}  alt="icon" onClick={end}  className="search-icon-temp"/>

          <input type="text" placeholder="Search" value={query} className="search-input-temp" onChange={handler}/>
          {query ?
          <img src={sources.go} onClick={begin} alt="icon" className="search-icon-temp"/>
          : null }
        </div>
  )
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