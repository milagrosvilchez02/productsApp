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
    this.props.onAdminView(true);
  };

  render() {
    const handleReturn = () => {
      this.props.onReturn();
    };
    return (
      <div className="max-container">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} className="form">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
          <button onClick={handleReturn}>BACK</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
