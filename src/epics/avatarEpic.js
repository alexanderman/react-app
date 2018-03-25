import { Observable } from 'rxjs';
import { actions } from '../reducers/avatarReducer';
import server from '../server/server';


const avatarEpic = ($action, store) => 
  $action.ofType(actions.AVATAR_MOVE)
  .debounceTime(100)
  .switchMap(action => Observable.of({ type: actions.AVATAR_PERSIST, payload: action.payload }) );
  // .map(action => ({ type: actions.AVATAR_PERSIST, payload: action.payload }));

export default avatarEpic;
