/**
 * TODO: connect to server
 */


import { Observable } from 'rxjs';
import { actions } from '../reducers/userReducer';
import server from '../server/server';

const userEpic = ($action, store) => 
  $action.ofType(actions.LOGIN_REQUEST)
  .debounceTime(200)
  .switchMap(action => Observable.of({ type: actions.LOGIN_SUCCESS, payload: { username: action.payload.username, userId: 1 } }) );

export default userEpic;
