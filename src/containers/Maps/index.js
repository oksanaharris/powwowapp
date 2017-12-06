import React, { Component } from 'react';
import { connect } from 'react-redux';
import FindArtButtons from './components/FindArtButtons.js';
import ReactGoogleMaps from './components/Maps.js';
import StreetView from './components/StreetView.js';

const kakaako_lat = 21.296594;
const kakaako_lng = -157.855613;


class Map extends Component {
  constructor() {
    super();
    
    this.state={ 
      lat: kakaako_lat,
      lng: kakaako_lng
    }
  }


  onMarkerClick(){
    console.log('i got clicked');
  }
  PichiAvo(){
    let PichiAvo_lat = 21.2968616;
    let PichiAvo_lng = -157.8607177;
    this.setState({
      lat: PichiAvo_lat, 
      lng: PichiAvo_lng
    })
  }





  render(){
    return (

        <div className="App">
          <ReactGoogleMaps 
            lat={this.state.lat} 
            lng={this.state.lng}
            onMarkerClick={this.onMarkerClick.bind(this)} />
          <FindArtButtons
            PichiAvo={this.PichiAvo.bind(this)} />
          <StreetView
            lat={this.state.lat}
            lng={this.state.lng} />
        </div>

    );
  }
}



const ConnectedMap = connect(
  null
)(Map)

export default ConnectedMap;