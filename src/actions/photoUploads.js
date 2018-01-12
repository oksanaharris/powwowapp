const axios = require('axios');

export const LOAD_PHOTOUPLOADS = 'LOAD_PHOTOUPLOADS';

export const loadPhotoUploads = () => {
  return function(dispatch){
    return axios.get('/api/photoUploads')
    .then( photoUploads => {
      dispatch({
        type: LOAD_PHOTOUPLOADS,
        photoUploads: photoUploads.data
      });
    });
  }
}