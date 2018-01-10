const axios = require('axios');
const querystring = require('querystring');

export const LOAD_STARS = 'LOAD_STARS';

export const loadStars = () => {
  return function(dispatch){
    return axios.get('http://192.168.0.1:9000/api/stars')
    .then( stars => {
      dispatch({
        type: LOAD_STARS,
        stars: stars.data
      });
    });
  }
}