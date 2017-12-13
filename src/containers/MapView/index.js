
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import {loadArtworks} from '../../actions/artworks';
import {MarkerIcon,MarkerPopup} from './Map.components';
import {geoLocate,url,attribution,kakaako} from './helpers';

class MapView extends Component {
  constructor(props){
    super(props);

    this.state = {
      myLat: kakaako.lat,
      myLng: kakaako.lng,
      popup: undefined
   }
   this.eachMarker=this.eachMarker.bind(this);
   this.findMe=this.findMe.bind(this);
   this.loadArt=this.loadArt.bind(this);
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

  loadArt(e,card){
    this.setState({popup: card})
  }

  eachMarker(art,i){
    return(<MarkerIcon art={art} key={i} handler={this.loadArt}/> )
  }




  render() {
    const yourLocation = [this.state.myLat, this.state.myLng];
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;
    const {popup} = this.state;

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
        {popup !== undefined ?
          <MarkerPopup card={popup} />
        : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
    }
}

const ConnectedMapView = connect(
  mapStateToProps,
  {loadArtworks}
)(MapView)


export default ConnectedMapView;
