import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Button from "../Layout/Button";

import style from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={style.signupForm}>
      <h1>Crie sua conta</h1>
      <form>
        <div className={style.inputGroup}>
          <label className={style.labels} htmlFor="username">
            Nome de usuario
          </label>
          <input className={style.inputs} type="text" name="username" />
        </div>
        <div className={style.inputGroup}>
          <label className={style.labels} htmlFor="email">
            Email
          </label>
          <input className={style.inputs} type="text" name="email" />
        </div>
        <div className={style.inputGroup}>
          <label className={style.labels} htmlFor="password">
            Senha
          </label>
          <input className={style.inputs} type="password" name="password" />
        </div>
        <div className={style.inputGroup}>
          <label className={style.labels} htmlFor="password2">
            Repetir senha
          </label>
          <input className={style.inputs} type="password" name="password2" />
        </div>
        <button className={style.buttonConfirm} type="submit">
          Cadastrar
        </button>
        <Button>Teste</Button>
      </form>
    </div>
  );
};

export default Signup;
