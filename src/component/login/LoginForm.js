import React from "react";
import TextInput from "../common/TextInput";

const LoginForm = ({ user, onChange, login, errors}) => {
  return (
    <div className="row">
      <form className = "col s12">
        <TextInput
          name="email"
          label="email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
          placeholder="email"
        />
        <TextInput
          name="password"
          label="password"
          type="password"
          value={user.password}
          onChange={onChange}
          error={errors.password}
          placeholder="password"
        />
        <button
          className="waves-effect waves-light btn"
          onClick={login}>
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;