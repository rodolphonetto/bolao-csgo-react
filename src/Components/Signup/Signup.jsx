import React, { Component } from "react";

import axios from "axios";

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

  onSubmit = event => {
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post(process.env.REACT_APP_URL_START + "/auth/signup", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
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
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              value={this.state.email}
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
          <div className={style.inputGroup}>
            <Label htmlFor="password">Repetir senha</Label>
            <Input
              type="password"
              name="password2"
              value={this.state.password2}
              changed={this.onChangeHandler}
            />
          </div>
          <ConfirmButton type="submit">Cadastrar</ConfirmButton>
        </form>
      </div>
    );
  }
}

export default Signup;
