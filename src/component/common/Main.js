import { Switch, Route } from "react-router-dom";
import React from "react";
import UsersPage from "../users/UsersPage";
import UserDetailPage from "../users/UserDetailPage";
import UserCreatePage from "../users/UserCreatePage";
import HomePage from "../home/HomePage";
import LoginPage from "../login/LoginPage";
import requireAuth from "../utils/requireAuth"

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={requireAuth(HomePage)} />
      <Route path="/users" component={requireAuth(UsersPage)} />
      <Route path="/user/:id" component={requireAuth(UserDetailPage)} />
      <Route path="/user" component={requireAuth(UserCreatePage)} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </div>
);

export default Main;
