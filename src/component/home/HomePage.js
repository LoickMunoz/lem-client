import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return <RenderHomePage user={this.props.user} />;
  }
}

function RenderHomePage(props) {
  if (props.user) {
    return <div>Hello {props.user.firstname}</div>;
  } else {
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(HomePage);
