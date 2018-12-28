import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import * as donationsActions from "../../actions/donationsActions";
import DonationsList from "./DonationsList";
import { Link } from "react-router-dom";
import moment from "moment";
import { getCompleteNameById } from '../../reducers'

class DonationPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actionsUsers.loadUsers();
    this.props.actionsDonations.loadDonations();
  }

  render() {
    return (
      <div>
        <h1>Donations</h1>
        <Link to={"/donation"}>
          <button className="waves-effect waves-light btn">Add donation</button>
        </Link>
        <DonationsList donations={this.props.donations} />
      </div>
    );
  }
}

function formatDonation(state) {
  const donationsWithUser = state.donations.map(donation => {
    let name = getCompleteNameById(state, donation._idUser);
    let date = moment(donation.date).format("D MMM YYYY - hh:mm");
    return {
      _id: donation._id,
      name: name,
      amount: donation.amount,
      date: date
    };
  });

  return donationsWithUser;
}

function mapStateToProps(state, ownProps) {
  return {
    donations: formatDonation(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsUsers: bindActionCreators(usersActions, dispatch),
    actionsDonations: bindActionCreators(donationsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationPage);
