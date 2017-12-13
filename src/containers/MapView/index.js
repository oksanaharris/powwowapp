
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import {loadArtworks} from '../../actions/artworks';
import {MarkerIcon} from './Map.components';
import {geoLocate} from './helpers';
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const copyright = "<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>____";




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
    return(<MarkerIcon art={art} key={i}/> )
  }

  componentWillMount(){
    this.props.loadArtworks();  
  }

  componentDidMount(){   
    geoLocate(document.getElementById('mapid'));
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
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;

    return (
      <div className="temp-app-container">
        <div className="map-container" id="mapid">
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer attribution={copyright} url={url}/>
            <Marker
                  onClick={this.findMe}
                  draggable={this.state.draggable}
                  onDragend={this.updatePosition}
                  position={markerPosition}
                  ref="marker">
                <Tooltip hover>
                  <span>HOLLLLa</span>
                </Tooltip>
            </Marker>
            {artworks.map(this.eachMarker)}
          </Map>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    artworks: state.artworks
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadArtworks: loadArtworks
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(MapView);
