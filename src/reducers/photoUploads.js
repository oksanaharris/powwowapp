import { LOAD_PHOTOUPLOADS } from '../actions/photoUploads.js';

const photoUploads = (state = [], action) => {

  switch(action.type){
    case LOAD_PHOTOUPLOADS:
      return action.photoUploads;
    default:
      return state
  }
}

export default photoUploads;