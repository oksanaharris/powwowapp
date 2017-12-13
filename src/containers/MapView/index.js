
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import {loadArtworks} from '../../actions/artworks';
import {MarkerIcon} from './Map.components';
import {geoLocate,url,attribution,kakaako} from './helpers';

class MapView extends Component {
  constructor(props){
    super(props);

    this.state = {
      center: kakaako,
      myLat: kakaako.lat,
      myLng: kakaako.lng,
      zoom: 15
   }
   this.eachMarker=this.eachMarker.bind(this);
   this.findMe=this.findMe.bind(this);
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
            <TileLayer attribution={attribution} url={url}/>
            <Marker
              onClick={this.findMe}
              draggable={true}
              onDragend={this.updatePosition}
              position={markerPosition}
              ref="marker">
              <Tooltip hover>
                <span>Your Location</span>
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
