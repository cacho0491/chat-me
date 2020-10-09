import classes from "./Login.module.css";
import React, { Component } from "react";
import Form from "../../../components/Form/Form";
import Button from "../../../components/UI/Button/Button";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isSignUp: true,
  };

  loginMethodHandler = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormHandler = () => {
    let formInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!this.state.isSignUp) {
      formInfo = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
    }
    this.props.onSubmitForm(formInfo);
  };

  render() {
    let loggedInRedirect = null;
    if (this.props.isLoggedin) {
      loggedInRedirect = <Redirect to="/" />;
    }
    return (
      <div className={classes.Login}>
        {loggedInRedirect}
        <h1>Please Login</h1>
        <Form isSignUp={this.state.isSignUp} formInput={this.inputHandler} />
        <Button
          sendMessage={this.submitFormHandler}
          buttonName={this.state.isSignUp ? "Login" : "SignUp"}
        />
        <Link onClick={this.loginMethodHandler}>
          {this.state.isSignUp ? "Sign Up" : "Login"}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitForm: (form) => dispatch(actions.submitForm(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
