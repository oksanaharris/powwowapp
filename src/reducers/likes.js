import { LOAD_LIKES } from '../actions/likes.js';


const likes = (state = [], action) => {

  switch(action.type){
    case LOAD_LIKES:
      return state;
    default:
      return state
  }
}

export default likes;