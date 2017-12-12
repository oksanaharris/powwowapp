import { LOAD_SITES } from '../actions/sites.js';


const sites = (state = [], action) => {

  switch(action.type){
    case LOAD_SITES:
      return state;
    default:
      return state
  }
}

export default sites;