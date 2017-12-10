const axios = require('axios');

export const LOAD_PHOTOS = 'LOAD_PHOTOS';



export const loadPhotos = () => {
  return function(dispatch){
    return axios.get('/api/photos')
    .then( photos => {
      dispatch({
        type: LOAD_PHOTOS,
        photos: photos.data
      });
    });
  }
}