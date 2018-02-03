import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Tooltip,Popup} from 'react-leaflet';
import L from 'leaflet';
// import 'leaflet-routing-machine';
import {loadArtworks,loadOnMap} from '../../actions/artworks';
import {MarkerIcon,MarkerPopup,MyLocation, SearchField} from './Map.components';
import {HeaderTemp,FooterMenuTemp} from './Map.components';
import {url,attribution,kakaako,searchHelper,queryHelper} from './helpers';

const locationSrc = "https://cdn4.iconfinder.com/data/icons/map-and-location-7/256/Location-7-512.png";



class MapView extends Component {
  constructor(){
    super();
  this.state = {
    hasLocation: false,
    query: '',
    active: false,
    popup: undefined,
    leaf: undefined,
    map: undefined,
    latlng: {
      lat: kakaako.lat,
      lng: kakaako.lng,
    }
  }
    this.eachMarker=this.eachMarker.bind(this);
    this.loadArt=this.loadArt.bind(this);
    this.getDirections=this.getDirections.bind(this);
    this.search = this.search.bind(this);
    this.beginSearch = this.beginSearch.bind(this);
    this.endSearch = this.endSearch.bind(this);
}

  findMe = () => {
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
    const leaf = document.getElementsByClassName('leaflet-container');
    this.setState({map: mymap, leaf: leaf});
    // this.refs.map.leafletElement.locate()
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

  search(e){
    this.setState({query: e.target.value, active: true})
  }

  beginSearch(e){
    let res = queryHelper(this.state.query,this.props.artworks);
    let art = res.pop();
    console.log(res);
    this.loadArt(e,art);
  }

  endSearch(){
    this.setState({query: '', active: false, popup: undefined})
  }







  render() {
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;
    let res = searchHelper(artworks,this.props.search);
    let search = searchHelper(artworks,this.props.search);
    const popup = search.length === 1 ? search.pop() : this.state.popup;
    const {hasLocation} = this.state;
    let {query} = this.state;
    let {active} = this.state;


    return (
      <div>
        <SearchField end={this.endSearch} begin={this.beginSearch} query={query} active={active} handler={this.search} />
        <div id="map">
        <Map
          center={this.state.latlng}
          length={3}
          onLocationfound={this.handleLocationFound}
          ref="map"
          zoom={16}>
          <TileLayer attribution={attribution} url={url}/>

          {hasLocation ?
          <MyLocation position={this.state.latlng} />
          : null }
          {res.map(this.eachMarker)}

        </Map>
        <div className="location" >
          <img onClick={this.findMe}  src={locationSrc} alt=""/>
        </div>
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