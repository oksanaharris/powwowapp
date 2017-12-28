import { LOAD_STARS} from '../actions/stars.js';
import { ADD_STAR} from '../actions/artworks.js';
import { REMOVE_STAR} from '../actions/artworks.js';


const stars = (state = [], action) => {

  switch(action.type){
    case LOAD_STARS:
      return action.stars;
    case ADD_STAR:
      console.log('running ADD star on REDUCER');
      return action.stars;
    case REMOVE_STAR:
      console.log('running REMOVE star on REDUCER');
      return action.stars;
    default:
      return state
  }
}

export default stars;