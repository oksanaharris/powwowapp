const axios = require('axios');
const querystring = require('querystring');

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_ARTWORK = 'LOAD_COMMENTS_ARTWORK';

export const loadComments = (artwork_id) => {
  return function(dispatch){
    return axios.get('/api/comments/')
    .then( comments => {
      console.log('inside loadComment action, coming back from /api/comments/', comments);
      dispatch({
        type: LOAD_COMMENTS,
        comments: comments.data
      });
    });
  }
}

export const loadCommentsByArtwork = (artwork_id) => {
  return function(dispatch){
    return axios.get('/api/comments/artwork/' + artwork_id)
    .then( comments => {
      dispatch({
        type: LOAD_COMMENTS_ARTWORK,
        comments: comments.data
      });
    });
  }
}


export const addCommentAction = (commentObj) => {
  console.log('running the addComment', commentObj);
  return function(dispatch){

    return axios.post('/api/comments/', querystring.stringify(commentObj))
    .then( comment => {
      return axios.get('/api/comments/artwork/' + comment.data.artwork_id);
    })
    .then( comments => {
      dispatch({
        type: LOAD_COMMENTS_ARTWORK,
        comments: comments.data
      });
    });
  }
}