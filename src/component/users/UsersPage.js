import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import UsersList from "./UsersList";
import { Link } from "react-router-dom";
import { userTypes } from "../../config/data";

class UsersPage extends Component {

  deleteUserByID = (user) => {
    this.props.actions.deleteUser(user);
  }

  componentWillMount() {
    this.props.actions.loadUsers();
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <Link to={"/user"}>
          <button className="waves-effect waves-light btn">Add user</button>
        </Link>
        <UsersList users={this.props.users} deleteUser={this.deleteUserByID} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const getTypeName = (typeSearched) => {
    return userTypes.find(type => type.code === typeSearched).text
  };

  const formatatedUsers = state.users.map(user => {
    return {
      ...user,
      type_name: getTypeName(user.type)
    };
  });

  return {
    users: formatatedUsers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
