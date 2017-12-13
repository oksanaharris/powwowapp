import L from 'leaflet';
const myLatSet = new Set();
const myLngSet = new Set();





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