import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token
      };
    case types.LOGOUT_OK:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      }
    default:
      return state;
  }
}
