const axios = require('axios');
const Promise = require('bluebird');

export const LOAD_ARTWORKS = 'LOAD_ARTWORKS';
export const SHOW_SEARCH = 'SHOW_SEARCH';



export const loadArtworks = () => {
  return Promise.coroutine(function* (dispatch) {
    dispatch({ 
      type: LOAD_ARTWORKS, 
      artworks: yield axios.get('/api/artworks') 
    })
  })
}

export const loadOnMap = (id) => {
  return {
    type: SHOW_SEARCH,
    payload: id
  }
}


