import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { axiosConfig, API_URL } from "../config";
import axios from "axios";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user};
}

export function deleteUserSuccess(user) {
  return {type: types.DELETE_USER_SUCCESS, user};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios
      .get(API_URL+"/user",axiosConfig)
      .then(users => {
        dispatch(loadUsersSuccess(users.data));
      })
      .catch(error => {
        throw error.data;
      });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .post(API_URL+"/user",user,axiosConfig)
      .then(user => {
        dispatch(createUserSuccess(user.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .put(API_URL+"/user/"+user._id,user,axiosConfig)
      .then(user => {
        dispatch(updateUserSuccess(user.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .delete(API_URL+"/user/"+user._id,axiosConfig)
      .then(user => {
        dispatch(deleteUserSuccess(user.data));
      })
      .catch(error => {
        throw error;
      });
  };
}