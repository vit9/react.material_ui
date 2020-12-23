import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// import actionToken from './actions/actionToken';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
