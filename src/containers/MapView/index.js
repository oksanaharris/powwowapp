
import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
import './temp.css'


const HeaderTemp = () => {
  return(
      <div className="header-temp">
        <img src="http://bit.ly/2AN2hqu" className="person-icon-temp"/>
        <div className="app-title-temp">PowWow</div>
        <img src="http://bit.ly/2At5KNM" alt="" className="header-menu-temp"/>
      </div>
    )
}

const SearchTemp = () => {
  return(
      <div className="search-temp">
        <img src="http://bit.ly/2ygeReT" className="search-icon-temp"/>
        <input type="text" placeholder="Search" className="search-input-temp"/>
        <img src="http://bit.ly/2C1wORz" className="boxview-icon-temp"/>
        <img src="http://bit.ly/2AKsAgF" className="directions-icon-temp"/>
      </div>
    )
}

class MapView extends Component {
  render() {
    const center = [21.296594, -157.855613]
    const rectangle = [[21.296594, -157.855613], [21.296594, -157.855613]]

    return (
      <div className="temp-app-container">
        <HeaderTemp />
        <SearchTemp />
        <div className="map-container">
          <Map center={center} zoom={15}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
              <Circle center={center} fillColor="blue" radius={200} />
            </LayerGroup>
            <FeatureGroup color="purple">
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={center} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </Map>
        </div>
      </div>
    )
  }
}


export default MapView;