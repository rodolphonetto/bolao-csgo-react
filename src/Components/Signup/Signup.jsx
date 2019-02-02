import React, { Component } from "react";
import { connect } from "react-redux";

import * as signupActions from "../../store/actions/index";

import InputGroup from "../Layout/InputGroup/InputGroup";
import Button from "../Layout/Button";
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

  componentDidUpdate() {
    if (this.props.msg) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 2000);
    }
  }

  render() {
    return (
      <div className={style.Form}>
        <h1>Crie sua conta</h1>
        <form onSubmit={this.onSignup}>
          <InputGroup
            label="Nome de Usuario:"
            Labeltype="login"
            htmlFor="username"
            type="text"
            name="username"
            value={this.state.username}
            changed={this.onChangeHandler}
            errors={this.props.errors.username}
            errosMsg={this.props.errors.username}
          />
          <InputGroup
            label="Email:"
            Labeltype="login"
            htmlFor="email"
            type="text"
            name="email"
            value={this.state.email}
            changed={this.onChangeHandler}
            errors={this.props.errors.email}
            errosMsg={this.props.errors.email}
          />
          <InputGroup
            label="Senha:"
            Labeltype="login"
            htmlFor="password"
            type="password"
            name="password"
            value={this.state.password}
            changed={this.onChangeHandler}
            errors={this.props.errors.password}
            errosMsg={this.props.errors.password}
          />
          <InputGroup
            label="Repetir Senha:"
            Labeltype="login"
            htmlFor="password2"
            type="password"
            name="password2"
            value={this.state.password2}
            changed={this.onChangeHandler}
            errors={this.props.errors.password}
            errosMsg={this.props.errors.password}
          />
          {!this.props.loading && <Button style="formBlack">Cadastrar</Button>}
          {this.props.loading === true && <Spinner />}
        </form>
        {this.props.msg && (
          <ModalMessage type="ok">{this.props.msg}</ModalMessage>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.signup.loading,
    msg: state.signup.msg.msg,
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
