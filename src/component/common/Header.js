import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/">LEM</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <NavItem to="/users">Users</NavItem>
            <NavItem to="/donation">Donation</NavItem>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
