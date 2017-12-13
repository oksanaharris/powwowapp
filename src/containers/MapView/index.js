
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
      myLat: kakaako.lat,
      myLng: kakaako.lng
   }
   this.eachMarker=this.eachMarker.bind(this);
   this.findMe=this.findMe.bind(this);
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

  eachMarker(art,i){
    return(<MarkerIcon art={art} key={i}/> )
  }




  render() {
    const yourLocation = [this.state.myLat, this.state.myLng];
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;

    return (
      <div className="temp-app-container">
        <div className="map-container" id="mapid">
          <Map center={kakaako} zoom={15}>
            <TileLayer attribution={attribution} url={url}/>
            <Marker
              onClick={this.findMe}
              position={yourLocation}
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
