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