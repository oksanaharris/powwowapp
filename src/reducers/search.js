import { SHOW_SEARCH } from '../actions/artworks.js';


const search = (state = [], action) => {

  switch(action.type){
    case SHOW_SEARCH:
      return action.payload
    default:
      return state
  }
}

export default search;