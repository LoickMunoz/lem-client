import { combineReducers } from "redux";
import users, * as fromUser from "./usersReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import donations, * as fromDonation from "./donationsReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  users,
  ajaxCallsInProgress,
  auth,
  donations
});

export const getDonationById = (state, id) =>
  fromDonation.getDonationById(state.donations, id);

export const getCompleteNameById = (state, id) =>
  fromUser.getCompleteNameById(state.users, id);

export const formatUsersForSelect = (state, type = 0) =>
  fromUser.formatUsersForSelect(state.users, type);

export default rootReducer;
