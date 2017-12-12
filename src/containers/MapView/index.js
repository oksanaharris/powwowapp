
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';
import './temp.css'
import {data} from './tempData';
import L from 'leaflet';
import {loadSites} from '../../actions/sites';
const myLatSet = new Set();
const myLngSet = new Set();




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
        lng: -157.865613,
      },
      zoom: 15,
      draggable: true,
      myLat: 21.296594,
      myLng: -157.865613,
      artists: null
   }
   this.eachMarker=this.eachMarker.bind(this);
   this.findMe=this.findMe.bind(this);
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const { lat, lng } = this.refs.marker.leafletElement.getLatLng()
    this.setState({
      marker: { lat, lng },
    })
  }


  eachMarker(art,i){
    const markerPosition = [art.lat, art.long]
    return(<DivIcon className="div-icon-marker" position={markerPosition}>
            <img className="markerImg" src="http://bit.ly/2z49Auq" alt=""/>
        </DivIcon>)
  }

  componentWillMount(){
    this.props.loadSites();  
  }

  componentDidMount(){
    
    var map = document.getElementById('mapid')
    let mymap = L.map(map);
    let res = mymap.locate({watch: true}).on('locationfound', function(e){
        var marker = L.marker([e.latitude, e.longitude]);
    }).on('locationfound',function(marker){
      myLatSet.add(marker.latitude);
      myLngSet.add(marker.longitude);
      var setLatIter = myLatSet[Symbol.iterator]();
      var setLngIter = myLngSet[Symbol.iterator]();
      let lat = setLatIter.next().value;
      let lng = setLngIter.next().value;
      localStorage.setItem('lat',lat);
      localStorage.setItem('lng',lng);
    })
  }

  findMe(){
    this.setState({
      myLat: localStorage.lat,
      myLng: localStorage.lng
    });
  }




  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.myLat, this.state.myLng];
    const sites = this.props.sites !== [] ? this.props.sites : [];

    return (
      <div className="temp-app-container">
        <div className="map-container" id="mapid">
          <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>____"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
              draggable={this.state.draggable}
              onDragend={this.updatePosition}
              position={markerPosition}
              ref="marker">
            <Tooltip hover>
              <span>HOLLLLa</span>
            </Tooltip>
        </Marker>
        {sites.map(this.eachMarker)}
      </Map>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    sites: state.sites
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadSites: loadSites
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(MapView);
