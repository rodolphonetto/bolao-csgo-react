import React, { Component } from "react";
import { connect } from "react-redux";

import * as authActions from "../../store/actions/index";

import InputGroup from "../Layout/InputGroup/InputGroup";
import Button from "../Layout/Button";
import Spinner from "../Layout/Spinner";
import ModalMessage from "../Layout/ModalMessage";

import style from "./Login.module.scss";

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

  componentDidMount() {
    if (this.props.isAuthenticated) {
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 500);
    }
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 500);
    }
  }

  render() {
    let message = null;
    if (this.props.errors.userNotFound) {
      message = this.props.errors.userNotFound;
    } else if (this.props.errors.wrongPassword) {
      message = this.props.errors.wrongPassword;
    }

    return (
      !this.props.isAuthenticated && (
        <div className={style.Form}>
          <h1>Faça o Login</h1>
          <form onSubmit={this.onSubmit}>
            <InputGroup
              label="Nome de Usuario:"
              Labeltype="login"
              htmlFor="username"
              type="text"
              name="username"
              value={this.state.username}
              changed={this.onChangeHandler}
            />
            <InputGroup
              label="Senha"
              Labeltype="login"
              htmlFor="password"
              type="password"
              name="password"
              value={this.state.password}
              changed={this.onChangeHandler}
            />
            {this.props.loading === false && (
              <Button style="formBlack">Entrar</Button>
            )}
            {this.props.loading === true && <Spinner />}
          </form>
          {message && <ModalMessage type="error">{message}</ModalMessage>}
          {this.props.isAuthenticated && (
            <ModalMessage type="ok">
              Login efetuado com sucesso, direcionando...
            </ModalMessage>
          )}
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
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
