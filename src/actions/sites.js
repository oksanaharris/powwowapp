const axios = require('axios');

export const LOAD_SITES = 'LOAD_SITES';



export const loadSites = () => {
  return function(dispatch){
    return axios.get('http://192.168.0.1:9000/api/sites')
    .then( sites => {
      dispatch({
        type: LOAD_SITES,
        sites: sites.data
      });
    });
  }
}