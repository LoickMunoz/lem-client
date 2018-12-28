import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import NavItem from "./NavItem";
import LogoutNavItem from "./LogoutNavItem";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/">LEM</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <NavItem to="/users">Users</NavItem>
            <NavItem to="/donations">Donations</NavItem>
            <DisplayLogout isAuthenticated={this.props.isAuthenticated} />
          </ul>
        </div>
      </nav>
    );
  }
}

function DisplayLogout(props) {
  if (props.isAuthenticated) {
    return <LogoutNavItem />;
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps)(Header));
