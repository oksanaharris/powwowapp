import { LOAD_PHOTOS } from '../actions/photos.js';


const photos = (state = [], action) => {

  switch(action.type){
    case LOAD_PHOTOS:
      return state;
    default:
      return state
  }
}

export default photos;