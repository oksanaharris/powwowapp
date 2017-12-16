import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Tooltip,Popup} from 'react-leaflet';
import L from 'leaflet';
//import 'leaflet-routing-machine';
import {loadArtworks} from '../../actions/artworks';
import {MarkerIcon,MarkerPopup,MyLocation} from './Map.components';
import {HeaderTemp,FooterMenuTemp} from './Map.components';
import Search from '../Search';
import {url,attribution,kakaako} from './helpers';




class MapView extends Component {
  constructor(){
    super();
  this.state = {
    hasLocation: false,
    popup: undefined,
    map: undefined,
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
  componentDidMount(){
    const mymap = document.getElementById('map');
    this.setState({map: mymap}); 
  }

  loadArt(e,art){
    this.setState({popup: art})
  }

  getDirections(e,art){
    let lat = art.Site.lat;
    let lng = art.Site.long;
    const map = L.map(this.state.map);
    L.Routing.control({
      waypoints: [
          L.latLng(this.state.latlng),
          L.latLng(lat, lng)
      ]
    }).addTo(map);
  }

  eachMarker(art,i){
    return(<MarkerIcon art={art} key={i} handler={this.loadArt}/> )
  }



  render() {
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;
    const {popup} = this.state;
    const {hasLocation} =this.state;

    return (
      <div>
        <HeaderTemp/>
        <Search/>
        <div id="map">
        <Map
          center={this.state.latlng}
          length={4}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
          ref="map"
          zoom={16}>
          <TileLayer attribution={attribution} url={url}/>

          {hasLocation ? 
          <MyLocation position={this.state.latlng} />
          : null }
          {artworks.map(this.eachMarker)}
        </Map>
        </div>
        <div>
        {popup !== undefined ?
            <MarkerPopup art={popup} handler={this.getDirections} />
          : null }
        </div>
        <FooterMenuTemp/>
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