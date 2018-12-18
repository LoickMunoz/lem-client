import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { API_URL } from "../config";
import axios from "axios";

export function loginSuccess(token, user) {
  return { type: types.LOGIN_SUCESS, token, user };
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCESS };
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
        throw error.response.data;
      });
  };
}
