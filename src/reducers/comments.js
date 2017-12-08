import { LOAD_COMMENTS } from '../actions/comments.js';


const comments = (state = [], action) => {

  switch(action.type){
    case LOAD_COMMENTS:
      return state;
    default:
      return state
  }
}

export default comments;