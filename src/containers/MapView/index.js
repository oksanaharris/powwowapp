import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Tooltip,Popup} from 'react-leaflet';
import L from 'leaflet';
//import 'leaflet-routing-machine';
import {loadArtworks,loadOnMap} from '../../actions/artworks';
import {MarkerIcon,MarkerPopup,MyLocation} from './Map.components';
import {HeaderTemp,FooterMenuTemp} from './Map.components';
import Search from '../Search';
import {url,attribution,kakaako,searchHelper} from './helpers';




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

  searchResults(){
    console.log('e')
  }



  render() {
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;
    let res = searchHelper(artworks,this.props.search);
    let search = searchHelper(artworks,this.props.search);
    const popup = search.length === 1 ? search.pop() : this.state.popup;
    const {hasLocation} = this.state;


    return (
      <div>
        <Search searchResults={this.searchResults}/>
        <div id="map">
        <Map
          center={this.state.latlng}
          length={3}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
          ref="map"
          zoom={16}>
          <TileLayer attribution={attribution} url={url}/>

          {hasLocation ?
          <MyLocation position={this.state.latlng} />
          : null }
          {res.map(this.eachMarker)}
        </Map>
        </div>
        <div>
        {popup !== undefined ?
            <MarkerPopup art={popup} handler={this.getDirections} />
          : null }
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    artworks: state.artworks,
    search: state.search
    }
}

const ConnectedMapView = connect(
  mapStateToProps,
  {loadArtworks,loadOnMap}
)(MapView)


export default ConnectedMapView;