const axios = require('axios');

export const LOAD_CHECKINS = 'LOAD_CHECKINS';



export const loadCheckins = () => {
  return function(dispatch){
    return axios.get('http://192.168.0.1:9000/api/checkins')
    .then( checkins => {
      dispatch({
        type: LOAD_CHECKINS,
        checkins: checkins.data
      });
    });
  }
}