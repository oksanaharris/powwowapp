import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Tooltip,Popup } from 'react-leaflet';
import {loadArtworks} from '../../actions/artworks';
import {MarkerIcon,MarkerPopup,MyLocation} from './Map.components';
import {url,attribution,kakaako} from './helpers';




class MapView extends Component {
  constructor(){
    super();
  this.state = {
    hasLocation: false,
    popup: undefined,
    latlng: {
      lat: kakaako.lat,
      lng: kakaako.lng,
    }
  }
    this.eachMarker=this.eachMarker.bind(this);
    this.loadArt=this.loadArt.bind(this);
    this.getDirections=this.getDirections.bind(this);
}

  handleClick = () => {
    this.refs.map.leafletElement.locate()
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  componentWillMount(){
    this.props.loadArtworks();  
  }

  loadArt(e,art){
    this.setState({popup: art})
  }

  getDirections(e){
    console.log(e);
  }

  eachMarker(art,i){
    return(<MarkerIcon art={art} key={i} handler={this.loadArt}/> )
  }



  render() {
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;
    const {popup} = this.state;

    return (
      <div>
        <Map
          center={this.state.latlng}
          length={4}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
          ref="map"
          zoom={16}>
          <TileLayer attribution={attribution} url={url}/>
          <MyLocation position={this.state.latlng} />
          {artworks.map(this.eachMarker)}
        </Map>
        {popup !== undefined ?
            <MarkerPopup art={popup} handler={this.getDirections} />
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