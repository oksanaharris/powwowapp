const axios = require('axios');

export const LOAD_AREAS = 'LOAD_AREAS';



export const loadAreas = () => {
  return function(dispatch){
    return axios.get('/api/areas')
    .then( areas => {
      dispatch({
        type: LOAD_AREAS,
        areas: areas.data
      });
    });
  }
}