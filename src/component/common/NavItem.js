import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavItem extends Component {
  render() {
    const { index, to, children, ...props } = this.props;

    let isActive;
    isActive = this.props.location.pathname === to;

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}

NavItem = withRouter(NavItem);

export default NavItem;
