import { combineReducers } from 'redux';
import systemReducer from './systemReducer';
import authReducer from './authReducer';

export default combineReducers({
  systemReducer,
  authReducer,
});
