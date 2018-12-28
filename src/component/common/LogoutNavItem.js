import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../actions/authActions";
import {Redirect} from "react-router-dom";

class logoutNavItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.actions.logout();
  }

  render() {
    return <li onClick={() => this.logout()}><a><i className="material-icons left">power_settings_new</i>logout</a></li>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(logoutNavItem);
