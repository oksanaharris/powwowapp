import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  StreetViewPanorama
} from "react-google-maps";



const key = "AIzaSyBBTA30AK8U7dJYaDZg2KvhaA-YaQvrhvs";
const mapUrl =`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`;

const loadingElement = <div style={{ height: `100%` }} />;
const containerElement = <div style={{ height: `400px`, width: `800px` }} />;
const mapElement = <div style={{ height: `100%` }} />;




const StreetView = compose(
  withProps({
    googleMapURL: mapUrl,
    loadingElement: loadingElement,
    containerElement: containerElement,
    mapElement: mapElement
  }),
  withScriptjs,
  withGoogleMap
)(props =>

    <StreetViewPanorama pov={{heading: -80,pitch: 8}} position={{lat:props.lat, lng: props.lng}} visible>
    </StreetViewPanorama>

);

export default StreetView;