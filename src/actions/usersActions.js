import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { constructHeader, API_URL } from "../config";
import axios from "axios";
import { addError } from "./errorsActions";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}

export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}

export function deleteUserSuccess(user) {
  return { type: types.DELETE_USER_SUCCESS, user };
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadUsers() {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .get(API_URL + "/user", constructHeader(getState().auth.token))
      .then(users => {
        dispatch(loadUsersSuccess(users.data));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        dispatch(addError(error.response.data.message));
        throw error.response.data.message;
      });
  };
}

export function saveUser(user) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .post(API_URL + "/user", user, constructHeader(getState().auth.token))
      .then(user => {
        dispatch(createUserSuccess(user.data));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        dispatch(addError(error.response.data.message));
        throw error.response.data.message;
      });
  };
}

export function updateUser(user) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .put(
        API_URL + "/user/" + user._id,
        user,
        constructHeader(getState().auth.token)
      )
      .then(user => {
        dispatch(updateUserSuccess(user.data));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        dispatch(addError(error.response.data.message));
        throw error.response.data.message;
      });
  };
}

export function deleteUser(user) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .delete(
        API_URL + "/user/" + user._id,
        constructHeader(getState().auth.token)
      )
      .then(user => {
        dispatch(deleteUserSuccess(user.data));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        dispatch(addError(error.response.data.message));
        throw error.response.data.message;
      });
  };
}
