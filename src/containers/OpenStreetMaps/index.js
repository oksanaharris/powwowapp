
import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'

export default class OpenStreetMaps extends Component {
  render() {
    const center = [21.296594, -157.855613]
    const rectangle = [[21.296594, -157.855613], [21.296594, -157.855613]]

    return (
      <Map center={center} zoom={15}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle center={center} fillColor="blue" radius={200} />
          <Circle center={center} fillColor="red" radius={100} stroke={false} />
          <LayerGroup>
            <Circle
              center={center}
              color="green"
              fillColor="green"
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
        <FeatureGroup color="purple">
          <Popup>
            <span>Popup in FeatureGroup</span>
          </Popup>
          <Circle center={center} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </Map>
    )
  }
}