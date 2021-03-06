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

    case types.LOGOUT_OK:
      return [];
      
    default:
      return state;
  }
}

export const getCompleteNameById = (users, id) => {
  const userFound = users.filter(user => user._id === id);
  if (userFound.length > 0) {
    return userFound[0].firstname + " " + userFound[0].lastname;
  } else {
    return null;
  }
};

export const formatUsersForSelect = (users, type = 0) => {
  let usersFiltered;
  if (type > 0) {
    usersFiltered = users.filter(user => user.type === type);
  } else {
    usersFiltered = users;
  }

  return usersFiltered.map(user => {
    return {
      code: user._id,
      text: user.firstname + " " + user.lastname
    };
  });
};
