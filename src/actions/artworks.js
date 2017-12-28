const axios = require('axios');
const querystring = require('querystring');

export const LOAD_ARTWORKS = 'LOAD_ARTWORKS';
export const SHOW_SEARCH = 'SHOW_SEARCH';
export const ADD_STAR = 'ADD_STAR';
export const REMOVE_STAR = 'REMOVE_STAR';
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


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


export const addLikeAction = (artwork_id, user_id) => {
  console.log('running the addLikeAction');
  return function(dispatch){
    let liked = true;
    let newLike = {
      artwork_id,
      user_id,
      liked
    }

    console.log('this is newLike', newLike);

    return axios.post('/api/likes/', querystring.stringify(newLike))
    .then( likes => {
      console.log('coming back from addLikeAction in then', likes);
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

export const removeLikeAction = (id) => {
  console.log('running the removeLikeAction on id', id);
  return function(dispatch){
    return axios.delete('/api/likes/' + id)
    // is this the right notation?
    .then( likes => {
      console.log('coming back from removeLikeAction in then', likes);
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