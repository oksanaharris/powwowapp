import { LOAD_EVENTS } from '../actions/events.js';


const events = (state = [], action) => {

  switch(action.type){
    case LOAD_EVENTS:
      return state;
    default:
      return state
  }
}

export default events;