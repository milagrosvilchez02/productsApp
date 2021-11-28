import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call the server
    this.props.onAdminView();
  };

  render() {
    const handleReturn = () => {
      this.props.onReturn();
    };
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        <button className="button" onClick={handleReturn}>
          BACK
        </button>
      </div>
    );
  }
}

export default LoginForm;
