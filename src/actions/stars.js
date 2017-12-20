const axios = require('axios');
const querystring = require('querystring');

export const LOAD_STARS = 'LOAD_STARS';
export const ADD_STAR = 'ADD_STAR';
export const REMOVE_STAR = 'REMOVE_STAR';



export const loadStars = () => {
  return function(dispatch){
    return axios.get('/api/stars')
    .then( stars => {
      dispatch({
        type: LOAD_STARS,
        stars: stars.data
      });
    });
  }
}

export const addStarAction = (artwork_id, user_id) => {
  console.log('running the addStarAction');
  return function(dispatch){
    let starred = true;
    let newStar = {
      artwork_id,
      user_id,
      starred
    }

    console.log('this is newStar', newStar);

    return axios.post('/api/stars/', querystring.stringify(newStar))
    .then( stars => {
      console.log('coming back from addStarAction in then', stars);
      dispatch({
        type: ADD_STAR,
        stars: stars.data
      });
    });
  }
}

export const removeStarAction = (id) => {
  console.log('running the removeStarAction on id', id);
  return function(dispatch){
    return axios.delete('/api/stars/' + id)
    // is this the right notation?
    .then( stars => {
      console.log('coming back from removeStarAction in then', stars);
      dispatch({
        type: REMOVE_STAR,
        stars: stars.data
      });
    });
  }
}