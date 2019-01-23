import React, { Component } from "react";

import Label from "../Layout/Label";
import Input from "../Layout/Input";
import ConfirmButton from "../Layout/ConfirmButton";

import style from "./Login.module.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      errors: {}
    };
  }

  onSubmit = event => {
    event.preventDefault();
    console.log("oi bom dia");
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
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
          <ConfirmButton type="submit">Entrar</ConfirmButton>
        </form>
      </div>
    );
  }
}

export default Login;
