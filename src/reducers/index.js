import { combineReducers } from 'redux';

import areas from './areas';
import artists from './artists';
import artworks from './artworks';
import checkins from './checkins';
import likes from './likes';
import sites from './sites';
import users from './users';
import search from './search';

export default combineReducers({
  areas,
  artists,
  artworks,
  checkins,
  likes,
  sites,
  users,
  search
});