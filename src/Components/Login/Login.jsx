import React, { Component } from "react";
import { connect } from "react-redux";

import * as authActions from "../../store/actions/index";

import Label from "../Layout/Label";
import Input from "../Layout/Input";
import ConfirmButton from "../Layout/ConfirmButton";
import Spinner from "../Layout/Spinner";
import ModalMessage from "../Layout/ModalMessage";

import style from "./Login.module.scss";
let message = null;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.onLogin(userData);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.errors.userNotFound) {
      message = this.props.errors.userNotFound;
    } else if (this.props.errors.wrongPassword) {
      message = this.props.errors.wrongPassword;
    }

    return (
      <div className={style.Form}>
        <h1>Faça o Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className={style.inputGroup}>
            <Label htmlFor="username">Nome de Usuario</Label>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              changed={this.onChangeHandler}
            />
          </div>
          <div className={style.inputGroup}>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              changed={this.onChangeHandler}
            />
          </div>
          {this.props.loading === false && (
            <ConfirmButton>Entrar</ConfirmButton>
          )}
          {this.props.loading === true && <Spinner />}
        </form>
        {message && <ModalMessage type="error">{message}</ModalMessage>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    errors: state.auth.errors
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onLogin: userData => dispatch(authActions.login(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Login);
