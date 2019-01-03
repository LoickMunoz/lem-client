import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersActions from "../../actions/usersActions";
import UserForm from "./UserForm";
import M from "materialize-css/dist/js/materialize.min.js";

export class UserDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {},
      saving: false
    };
  }
  
  componentDidMount() {
    M.AutoInit();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user._id && this.props.user._id !== nextProps.user._id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({ user: Object.assign({}, nextProps.user) });
    }
  }

  updateUserState = (event) => {
    const field = event.target.name;
    let user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  redirect = () => {
    this.setState({ saving: false });
    this.props.history.push("/users");
  }

  updateUser = (event) => {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .updateUser(this.state.user)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <UserForm
          user={this.state.user}
          onChange={this.updateUserState}
          saving={this.state.saving}
          onSave={this.updateUser}
        />
      </div>
    );
  }
}

function getUserById(users, id) {
  const userFound = users.filter(user => user._id === id);
  if (userFound.length > 0) return userFound[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const userId = ownProps.match.params.id; // from the path `/course/:id`

  let user = {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  if (userId && state.users.length > 0) {
    user = getUserById(state.users, userId);
  }

  return {
    user: user
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
)(UserDetailPage);
