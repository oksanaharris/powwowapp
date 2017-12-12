const axios = require('axios');

export const LOAD_ARTISTS = 'LOAD_ARTISTS';



export const loadArtists = () => {
  return function(dispatch){
    return axios.get('/api/artists')
    .then( artists => {
      dispatch({
        type: LOAD_ARTISTS,
        artists: artists.data
      });
    });
  }
}