import React, { Component } from "react";
import { connect } from "react-redux";

import classnames from "classnames";

import * as signupActions from "../../store/actions/index";

import Label from "../Layout/Label";
import Input from "../Layout/Input";
import InputError from "../Layout/InputError";
import ConfirmButton from "../Layout/ConfirmButton";
import ModalMessage from "../Layout/ModalMessage";
import Spinner from "../Layout/Spinner";

import style from "./Signup.module.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  onSignup = event => {
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.onSignup(newUser);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className={style.Form}>
        <h1>Crie sua conta</h1>
        <form onSubmit={this.onSignup}>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="username">Nome de Usuario</Label>
            <Input
              type="text"
              name="username"
              error={this.props.errors.username}
              value={this.state.username}
              changed={this.onChangeHandler}
            />
            {this.props.errors.username && (
              <InputError>{this.props.errors.username}</InputError>
            )}
          </div>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              error={this.props.errors.email}
              value={this.state.email}
              changed={this.onChangeHandler}
            />
            {this.props.errors.email && (
              <InputError>{this.props.errors.email}</InputError>
            )}
          </div>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              name="password"
              error={this.props.errors.password}
              value={this.state.password}
              changed={this.onChangeHandler}
            />
            {this.props.errors.password && (
              <InputError>{this.props.errors.password}</InputError>
            )}
          </div>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="password">Repetir senha</Label>
            <Input
              type="password"
              name="password2"
              error={this.props.errors.password}
              value={this.state.password2}
              changed={this.onChangeHandler}
            />
            {this.props.errors.password && (
              <InputError>{this.props.errors.password}</InputError>
            )}
          </div>
          {this.props.loading === false && (
            <ConfirmButton>Cadastrar</ConfirmButton>
          )}
          {this.props.loading === true && <Spinner />}
        </form>
        {this.props.msg && <ModalMessage message={this.props.msg.msg} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.signup.loading,
    msg: state.signup.msg,
    errors: state.signup.errors
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onSignup: newUser => dispatch(signupActions.singup(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Signup);
