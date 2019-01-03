import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { API_URL } from "../config";
import axios from "axios";
import { addError } from "./errorsActions";

export function loginSuccess(token, user) {
  return { type: types.LOGIN_SUCCESS, token, user };
}

export function logoutSuccess() {
  return { type: types.LOGOUT_OK };
}

export function login(user) {
  return function(dispatch) {
    let userInfoLogin = { email: user.email, password: user.password };

    dispatch(beginAjaxCall());
    return axios
      .post(API_URL + "/login", userInfoLogin)
      .then(info => {
        dispatch(loginSuccess(info.data.token, info.data.user));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        dispatch(addError(error.response.data.message));
        throw error.response.data.message;
      });
  };
}

export function logout() {
  return function(dispatch) {
    return new Promise(resolve => {
      resolve(dispatch(logoutSuccess()));
    });
  };
}
