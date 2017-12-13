import L from 'leaflet';
const myLatSet = new Set();
const myLngSet = new Set();

export const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
export const attribution = "<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>____";
export const kakaako = {
        lat: 21.296594,
        lng: -157.855613,
      };



export function geoLocate(map){
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