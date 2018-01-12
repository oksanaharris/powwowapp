import _ from 'lodash';


export const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
export const attribution = "<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>____";
export const kakaako = {
        lat: 21.296594,
        lng: -157.855613,
      };

export function searchHelper(data,id){
  if(id.length === 0){
    return data;
  }else{
    let res = data.filter((elem)=>{
        return elem.id === parseInt(id);
      })
    return res;
  }
}

export function queryHelper(e,data) {
      let local = [];
      let query = e.toLowerCase();
      let all = data.map((elem)=>{
        let all = [];
        let obj = {};
        obj.title = elem.title;
        obj.artistName = elem.Artist.name;
        obj.url = elem.url;
        obj.lat = elem.Site.lat;
        obj.long = elem.Site.long;
        obj.description = elem.description;
        //@oksana - if you need any addition data on the marker-pop, just declare here and it will become available.
        all.push(obj);
        return obj;
      })
      let res = all.map((elem,i) => {
        return Object.keys(elem);
      }).reduce((prev,curr) => {
        return prev.concat(curr);
      }).map((elem)=>{
        return all.filter((key,i)=>{
          let x = _.mapValues(key, _.method('toLowerCase'));
          if(query.length >2){
            if(x[elem] !== undefined && x[elem].match(query)){
              local.push(all[i]);
            }
          }
        })
      })

      if(data === undefined){ 
        return []; }
      else{
        let unique = [...new Set(local)]; //this makes it unique, which fixes the problem of the function been called on change, that way its live action.
        return unique; }
  }