const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';



export const loadUsers = () => {
  return function(dispatch){
    return axios.get('/api/users')
    .then( users => {
      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    });
  }
}