import { LOAD_LIKES } from '../actions/likes.js';
import { ADD_LIKE} from '../actions/artworks.js';
import { REMOVE_LIKE} from '../actions/artworks.js';


const likes = (state = [], action) => {

  switch(action.type){
    case LOAD_LIKES:
      return state;
    case ADD_LIKE:
      console.log('running ADD like on REDUCER');
      return action.likes;
    case REMOVE_LIKE:
      console.log('running REMOVE like on REDUCER');
      return action.likes;
    default:
      return state
  }
}

export default likes;