import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../actions/authActions";
import LoginForm from "./LoginForm";
import M from "materialize-css/dist/js/materialize.min.js";

export class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: { email: "", password: "" },
      errors: {}
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    M.AutoInit();
  }

  updateUserState(event) {
    const field = event.target.name;
    let user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  loginFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.user.password === "") {
      errors.password = "password can't be empty";
      formIsValid = false;
    }

    if (this.state.user.email === "") {
      errors.email = "email can't be empty";
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  login(event) {
    event.preventDefault();

    if (!this.loginFormIsValid()) {
      return;
    }

    this.props.actions
      .login(this.state.user)
      .then(() => this.redirect("/"))
      .catch(error => {
        if (error.message) {
          alert(error.message);
        }
      });
  }

  redirect() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <LoginForm
          user={this.state.user}
          onChange={this.updateUserState}
          login={this.login}
          errors={this.state.errors}
        />
      </div>
    );
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
)(LoginPage);
