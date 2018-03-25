import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers';
import rootEpic from './epics';
const epicMiddleWare = createEpicMiddleware(rootEpic);

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(epicMiddleWare)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
