import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as donationsActions from "../../actions/donationsActions";
import M from "materialize-css/dist/js/materialize.min.js";
import DonationForm from "./DonationForm";
import { getDonationById, formatUsersForSelect } from "../../reducers";
import moment from 'moment'

export class DonationDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      donation: Object.assign({}, this.props.donation),
      errors: {},
      saving: false
    };
  }
  componentDidMount() {
    M.AutoInit();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.donation._id &&
      this.props.donation._id !== nextProps.donation._id
    ) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({ donation: Object.assign({}, nextProps.donation) });
    }
  }

  updateDonationState = (event) => {
    const field = event.target.name;
    let donation = Object.assign({}, this.state.donation);
    donation[field] = event.target.value;
    return this.setState({ donation: donation });
  }

  redirect = () => {
    this.setState({ saving: false });
    this.props.history.push("/donations");
  }

  saveDonation = (event) => {
    event.preventDefault();

    this.setState({ saving: true });
    this.props.actions
      .saveDonation(this.state.donation)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <DonationForm
          donation={this.state.donation}
          users={this.props.usersForSelect}
          onChange={this.updateDonationState}
          onSave={this.saveDonation}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const donationId = ownProps.match.params.id; // from the path `/course/:id`

  let donation = {
    _id: "",
    _idUser: "",
    amount: 0,
    date: moment().format("YYYY-MM-DD"),
    type: null
  };

  if (donationId && state.donations.length > 0) {
    donation = getDonationById(state, donationId);
  }

  return {
    donation: donation,
    usersForSelect: formatUsersForSelect(state, 1)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(donationsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationDetailPage);
