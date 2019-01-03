import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function users(state = initialState.donations, action) {
  switch (action.type) {
    case types.LOAD_DONATIONS_SUCCESS:
      return action.donations;

    case types.CREATE_DONATION_SUCCESS:
      return [...state, Object.assign({}, action.donation)];

    case types.UPDATE_DONATION_SUCCESS:
      return [
        ...state.filter(donation => donation._id !== action.donation._id),
        Object.assign({}, action.donation)
      ];

    case types.DELETE_DONATION_SUCCESS:
      return state.filter(donation => donation._id !== action.donation._id);
    
    case types.LOGOUT_OK:
      return [];

    default:
      return state;
  }
}

export const getDonationById = (donations, id) => {
  const donnationFound = donations.filter(donation => donation._id === id);
  if (donnationFound.length > 0) return donnationFound[0];
  return null;
};
