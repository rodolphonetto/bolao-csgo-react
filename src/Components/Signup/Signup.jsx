import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";
import classnames from "classnames";

import Label from "../Layout/Label";
import Input from "../Layout/Input";
import ConfirmButton from "../Layout/ConfirmButton";

import style from "./Signup.module.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  preventRefresh = event => {
    event.preventDefault();
  };

  onSubmit = event => {
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios
      .post(`${process.env.REACT_APP_URL_START}/auth/signup`, newUser)
      .then(
        this.setState(() => {
          return {
            errors: {}
          };
        })
      )
      .catch(err => {
        this.setState(() => {
          return {
            errors: err.response.data
          };
        });
      });
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
        <form onSubmit={this.preventRefresh}>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="username">Nome de Usuario</Label>
            <Input
              type="text"
              name="username"
              error={this.state.errors.username}
              value={this.state.username}
              changed={this.onChangeHandler}
            />
            {this.state.errors.username && (
              <div className={style.errorMessage}>
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              error={this.state.errors.email}
              value={this.state.email}
              changed={this.onChangeHandler}
            />
          </div>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              name="password"
              error={this.state.errors.password}
              value={this.state.password}
              changed={this.onChangeHandler}
            />
            {this.state.errors.password && (
              <div className={style.errorMessage}>
                {this.state.errors.password}
              </div>
            )}
          </div>
          <div className={classnames(style.inputGroup)}>
            <Label htmlFor="password">Repetir senha</Label>
            <Input
              type="password"
              name="password2"
              error={this.state.errors.password}
              value={this.state.password2}
              changed={this.onChangeHandler}
            />
            {this.state.errors.password && (
              <div className={style.errorMessage}>
                {this.state.errors.password}
              </div>
            )}
          </div>
          <ConfirmButton click={this.props.onSubmit}>Cadastrar</ConfirmButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onSubmit: () => dispatch({ type: "ON_SUBMIT", payload: this.state })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Signup);
