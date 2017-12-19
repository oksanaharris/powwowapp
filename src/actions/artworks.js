const axios = require('axios');

export const LOAD_ARTWORKS = 'LOAD_ARTWORKS';
export const SHOW_SEARCH = 'SHOW_SEARCH';


export function loadArtworks(){
  return function(dispatch){
    return axios.get('/api/artworks')
    .then( artworks => {
      dispatch({
        type: LOAD_ARTWORKS,
        artworks: artworks.data
      });
    });
  }
}

export const loadOnMap = (id) => {
  return {
    type: SHOW_SEARCH,
    payload: id
  }
}


