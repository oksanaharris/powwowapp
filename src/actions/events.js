const axios = require('axios');

export const LOAD_EVENTS = 'LOAD_EVENTS';



export const loadEvents = () => {
  return function(dispatch){
    return axios.get('/api/events')
    .then( events => {
      dispatch({
        type: LOAD_EVENTS,
        events: events.data
      });
    });
  }
}