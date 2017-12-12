import { LOAD_ARTWORKS } from '../actions/artworks.js';


const artworks = (state = [], action) => {

  switch(action.type){
    case LOAD_ARTWORKS:
      return state;
    default:
      return state
  }
}

export default artworks;