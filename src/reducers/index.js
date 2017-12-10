import { combineReducers } from 'redux';

import comments from './comments';
import events from './events';
import likes from './likes';
import photos from './photos';
import users from './users';

export default combineReducers({
  comments,
  events,
  likes,
  photos,
  users
});