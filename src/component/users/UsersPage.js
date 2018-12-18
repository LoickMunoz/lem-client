import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import UsersList from "./UsersList";
import { Link } from "react-router-dom";

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.deleteUserByID = this.deleteUserByID.bind(this);
  }

  deleteUserByID(user) {
    this.props.actions.deleteUser(user);
  }

  componentWillMount() {
    this.props.actions.loadUsers();
  }

  render() {
    return (
      <div>
        <Link to={"/user"}>
          <button className="waves-effect waves-light btn">Add user</button>
        </Link>
        <UsersList users={this.props.users} deleteUser={this.deleteUserByID} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
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
