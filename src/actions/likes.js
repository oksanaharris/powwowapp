const axios = require('axios');

export const LOAD_LIKES = 'LOAD_LIKES';


export const loadLikes = () => {
  return function(dispatch){
    return axios.get('http://192.168.0.1:9000/api/likes')
    .then( likes => {
      dispatch({
        type: LOAD_LIKES,
        likes: likes.data
      });
    });
  }
}