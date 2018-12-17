import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function users(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;

    case types.CREATE_USER_SUCCESS:
      return [...state, Object.assign({}, action.user)];

    case types.UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user._id !== action.user._id),
        Object.assign({}, action.user)
      ];

    case types.DELETE_USER_SUCCESS:
      return state.filter(user => user._id !== action.user._id);

    default:
      return state;
  }
}
