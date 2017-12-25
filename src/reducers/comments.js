import { LOAD_COMMENTS } from '../actions/comments.js';
import { LOAD_COMMENTS_ARTWORK } from '../actions/comments.js';


const comments = (state = [], action) => {

  switch(action.type){
    case LOAD_COMMENTS:
      return action.comments;
    case LOAD_COMMENTS_ARTWORK:
      return action.comments;
    default:
      return state
  }
}

export default comments;