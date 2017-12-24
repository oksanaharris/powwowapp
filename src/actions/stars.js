const axios = require('axios');
const querystring = require('querystring');

export const LOAD_STARS = 'LOAD_STARS';
export const ADD_STAR = 'ADD_STAR';
export const REMOVE_STAR = 'REMOVE_STAR';



export const loadStars = () => {
  return function(dispatch){
    return axios.get('/api/stars')
    .then( stars => {
      dispatch({
        type: LOAD_STARS,
        stars: stars.data
      });
    });
  }
}