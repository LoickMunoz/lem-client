import { combineReducers } from 'redux';
import users from './usersReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  ajaxCallsInProgress
});

export default rootReducer;