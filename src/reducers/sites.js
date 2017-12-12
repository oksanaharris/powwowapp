import { LOAD_SITES } from '../actions/sites.js';


const sites = (state = [], action) => {

  switch(action.type){
    case LOAD_SITES:
      return action.sites;
    default:
      return state
  }
}

export default sites;