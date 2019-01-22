import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            Senha:
          </label>
          <input className={style.inputs} type="password" name="password" />
        </div>
        <div className={style.inputGroup}>
          <label className={style.labels} htmlFor="password2">
            Repetir senha:
          </label>
          <input className={style.inputs} type="password2" name="password2" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
