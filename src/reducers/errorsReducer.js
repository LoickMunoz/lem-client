import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import uuid from "uuid/v1";

export default function users(state = initialState.errors, action) {
  switch (action.type) {
    case types.ADD_ERROR:
      return [...state, Object.assign({}, formatError(action.error))];

    case types.REMOVE_ERROR:
      return state.filter(error => error._id !== action.error._id);

    case types.LOGOUT_OK:
    case types.REMOVE_ALL_ERRORS:
      return [];
      
    default:
      return state;
  }
}

const formatError = message => {
  const id = uuid();
  return {
    _id: id,
    message: message
  };
};