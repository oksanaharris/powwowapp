import { combineReducers } from 'redux';

import areas from './areas';
import artists from './artists';
import artworks from './artworks';
import checkins from './checkins';
import comments from './comments';
import likes from './likes';
import photoUploads from './photoUploads';
import sites from './sites';
import users from './users';
import search from './search';
import stars from './stars';

export default combineReducers({
  areas,
  artists,
  artworks,
  checkins,
  comments,
  likes,
  photoUploads,
  sites,
  users,
  search,
  stars
});