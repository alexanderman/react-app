import { combineEpics } from 'redux-observable';
import avatarEpic from './avatarEpic';
import userEpic from './userEpic';


export default combineEpics(
  avatarEpic,
  userEpic
);