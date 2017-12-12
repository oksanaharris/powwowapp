import { LOAD_AREAS } from '../actions/areas.js';


const areas = (state = [], action) => {

  switch(action.type){
    case LOAD_AREAS:
      return state;
    default:
      return state
  }
}

export default areas;