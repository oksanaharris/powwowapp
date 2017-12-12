const axios = require('axios');

export const LOAD_ARTWORKS = 'LOAD_ARTWORKS';



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