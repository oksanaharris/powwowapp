
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';
import L from 'leaflet';
import {loadArtworks} from '../../actions/artworks';
const myLatSet = new Set();
const myLngSet = new Set();
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
    const markerPosition = [art.Site.lat, art.Site.long]
    return( <DivIcon 
              key={i} 
              className="div-icon-marker" 
              position={markerPosition}>
              <img 
                className="markerImg" 
                src={art.Artist.photourl} 
                alt=""/>
            </DivIcon>)
  }

  componentWillMount(){
    this.props.loadArtworks();  
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
    const artworks = this.props.artworks === undefined ? []: this.props.artworks;

    return (
      <div className="temp-app-container">
        <div className="map-container" id="mapid">
          <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution={copyright}
          url={url}
        />
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
