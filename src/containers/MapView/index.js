
import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  Rectangle,
  TileLayer,
  Marker,
  Tooltip
} from 'react-leaflet'
import './temp.css'
import {data} from './tempData';
import L from 'leaflet';
var mymap = L.map('map');

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

const FooterMenuTemp = () => {
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

class MapView extends Component {
  constructor(props){
    super(props);

    this.state = {
      center: {
        lat: 21.296594,
        lng: -157.855613,
      },
      marker: {
        lat: 21.296594,
        lng: -157.855613,
      },
      zoom: 15,
      draggable: true,
      geoLocation: undefined
   }
   this.eachMarker=this.eachMarker.bind(this);
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const { lat, lng } = this.refs.marker.leafletElement.getLatLng()
    //console.log(lat,lng)
    this.setState({
      marker: { lat, lng },
    })
  }


  eachMarker(art,i){
    const markerPosition = [art.lat, art.lng]
    return(<Marker
              key={i}
              draggable={this.state.draggable}
              onDragend={this.updatePosition}
              position={markerPosition}
              ref="marker">
            <Tooltip hover>
              <span>{art.title}</span>
            </Tooltip>
        </Marker>)
  }

  componentDidMount(){
    let res = mymap.locate({setView: true, watch: true}).on('locationfound', function(e){
      res = L.marker([e.latitude, e.longitude]);
      return res._latlng
    });
    this.setState({geoLocation: res})
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]
    console.log(this.state.geoLocation)
    return (
      <div className="temp-app-container">
        <HeaderTemp />
        <SearchTemp />
        <div className="map-container" id="mapid">
          <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>____"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map(this.eachMarker)}
      </Map>
        </div>
        <FooterMenuTemp/>
      </div>
    )
  }
}


export default MapView;