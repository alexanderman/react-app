import { combineReducers } from 'redux';

import userReducer from './userReducer';
import avatarReducer from './avatarReducer';

export default combineReducers({
  user: userReducer,
  avatar: avatarReducer
});
