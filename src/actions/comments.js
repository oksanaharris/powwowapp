const axios = require('axios');

export const LOAD_COMMENTS = 'LOAD_COMMENTS';



export const loadComments = () => {
  return function(dispatch){
    return axios.get('/api/comments')
    .then( comments => {
      dispatch({
        type: LOAD_COMMENTS,
        comments: comments.data
      });
    });
  }
}