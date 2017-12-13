import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Routing from './Routing';

const position = [21.2960919, -157.859673];
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
class MapContainer extends Component {
  render() {
    return (
      <Map center={position} zoom={5} ref={map => this.map = map}>
        <TileLayer
          url={url}
        />
        <Routing map={this.map} />
      </Map>
    );
  }
}

MapContainer.propTypes = {};
MapContainer.defaultProps = {};

export default MapContainer;