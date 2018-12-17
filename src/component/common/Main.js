import { Switch, Route } from "react-router-dom";
import React from "react";
import UsersPage from "../users/UsersPage";
import UserDetailPage from "../users/UserDetailPage";
import UserCreatePage from "../users/UserCreatePage";
import HomePage from "../home/HomePage";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/user/:id" component={UserDetailPage} />
      <Route path="/user" component={UserCreatePage} />
    </Switch>
  </div>
);

export default Main;
