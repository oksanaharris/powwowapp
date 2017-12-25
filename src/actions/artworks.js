const axios = require('axios');
const querystring = require('querystring');

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



export const addStarAction = (artwork_id, user_id) => {
  console.log('running the addStarAction');
  return function(dispatch){
    let starred = true;
    let newStar = {
      artwork_id,
      user_id,
      starred
    }

    console.log('this is newStar', newStar);

    return axios.post('/api/stars/', querystring.stringify(newStar))
    .then( stars => {
      console.log('coming back from addStarAction in then', stars);
      return axios.get('/api/artworks');
    })
    .then( artworks => {
      dispatch({
        type: LOAD_ARTWORKS,
        artworks: artworks.data
      });
    });
  }
}

export const removeStarAction = (id) => {
  console.log('running the removeStarAction on id', id);
  return function(dispatch){
    return axios.delete('/api/stars/' + id)
    // is this the right notation?
    .then( stars => {
      console.log('coming back from removeStarAction in then', stars);
      return axios.get('/api/artworks');
    })
    .then( artworks => {
      dispatch({
        type: LOAD_ARTWORKS,
        artworks: artworks.data
      });
    });
  }
}


