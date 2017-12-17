const axios = require('axios');

export const LOAD_ARTWORKS = 'LOAD_ARTWORKS';
export const SHOW_SEARCH = 'SHOW_SEARCH';


export const loadArtworks = () => {
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
  return function(dispatch){
    return axios.get(`/api/artworks/${id}`)
    .then( artwork => {
      dispatch({
        type: SHOW_SEARCH,
        artworks: artwork.data
      });
    });
  }
}


