import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import { constructHeader, API_URL } from "../config";
import axios from "axios";

export function loadDonationsSuccess(donations) {
  return { type: types.LOAD_DONATIONS_SUCCESS, donations };
}

export function createDonationSuccess(donation) {
  return { type: types.CREATE_DONATION_SUCCESS, donation };
}

export function updateDonationSuccess(donation) {
  return { type: types.UPDATE_DONATION_SUCCESS, donation };
}

export function deleteDonationSuccess(donation) {
  return { type: types.DELETE_DONATION_SUCCESS, donation };
}

export function loadDonations() {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios
      .get(API_URL + "/donation", constructHeader(getState().auth.token))
      .then(donations => {
        dispatch(loadDonationsSuccess(donations.data));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error.data;
      });
  };
}

export function saveDonation(donation) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    if (donation._id === "") {
      return axios
        .post(
          API_URL + "/donation",
          donation,
          constructHeader(getState().auth.token)
        )
        .then(donation => {
          dispatch(createDonationSuccess(donation.data));
        })
        .catch(error => {
          dispatch(ajaxCallError());
          throw error;
        });
    } else {
      return axios
        .put(
          API_URL + "/donation/" + donation._id,
          donation,
          constructHeader(getState().auth.token)
        )
        .then(donation => {
          dispatch(updateDonationSuccess(donation.data));
        })
        .catch(error => {
          dispatch(ajaxCallError());
          throw error;
        });
    }
  };
}
