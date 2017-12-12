import { LOAD_CHECKINS } from '../actions/checkins.js';


const checkins = (state = [], action) => {

  switch(action.type){
    case LOAD_CHECKINS:
      return state;
    default:
      return state
  }
}

export default checkins;