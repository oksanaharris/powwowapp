import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  StreetViewPanorama,
  OverlayView
} from "react-google-maps";


const key = "AIzaSyBBTA30AK8U7dJYaDZg2KvhaA-YaQvrhvs";
const mapUrl =`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`;
const loadingElement = <div style={{ height: `100%` }} />;
const containerElement = <div style={{ height: `400px`, width: `800px` }} />;
const mapElement = <div style={{ height: `100%` }} />;
const defaultCenter = { lat: 21.296594, lng: -157.855613 };





const MyMapComponent = compose(
  withProps({
    googleMapURL:mapUrl,
    loadingElement: loadingElement,
    containerElement: containerElement,
    mapElement: mapElement
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={defaultCenter}>
    <Marker 
      position={{ lat: props.lat, lng: props.lng }} 
      onClick={props.onMarkerClick}/>
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = ({lat, lng,onMarkerClick}) => [
  
  <MyMapComponent key="map" lat={lat} lng={lng} onMarkerClick={onMarkerClick} />
];

export default enhance(ReactGoogleMaps);