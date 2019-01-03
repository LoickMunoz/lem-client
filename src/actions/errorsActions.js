import * as types from "./actionTypes";

export function addError(error) {
  return { type: types.ADD_ERROR, error };
}

export function removeError(error) {
  return { type: types.REMOVE_ERROR, error };
}

export function removeAllErrors() {
  return { type: types.REMOVE_ALL_ERRORS };
}

