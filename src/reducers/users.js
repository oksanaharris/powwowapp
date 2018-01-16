import { ADD_USER, LOGIN_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){

    case ADD_USER:
      return action.status.data;
    case LOGIN_USER:
      return action.status.data;
    default:
      return state
  }
}

export default users;