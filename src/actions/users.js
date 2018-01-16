const axios = require('axios');

export const ADD_USER = 'ADD_USER';



export const registerNewUser = (user) => {
  return function(dispatch){
    return axios.post('/api/users',user)
    .then( status => {
      dispatch({
        type: ADD_USER,
        status: status
      });
    });
  }
}