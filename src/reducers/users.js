import { ADD_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){

    case ADD_USER:
    console.log(action.status);
      return state;
    default:
      return state
  }
}

export default users;