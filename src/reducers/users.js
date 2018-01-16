import { ADD_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){

    case ADD_USER:
    console.log(action.status);
      return action.status.data;
    default:
      return state
  }
}

export default users;