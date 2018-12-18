import { combineReducers } from 'redux';
import users from './usersReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import auth from "./authReducer"

const rootReducer = combineReducers({
  users,
  ajaxCallsInProgress,
  auth
});

export default rootReducer;