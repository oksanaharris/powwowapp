import { LOAD_ARTISTS } from '../actions/artists.js';


const artists = (state = [], action) => {

  switch(action.type){
    case LOAD_ARTISTS:
      return state;
    default:
      return state
  }
}

export default artists;