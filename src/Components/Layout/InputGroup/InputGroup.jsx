import React from "react";

import classnames from "classnames";

import style from "./InputGroup.module.scss";

const InputGroup = props => {
  // Input Classes
  let hasErrors = "";

  if (props.error) {
    hasErrors = style.hasErrors;
  }

  // Label Classes
  let login = "";
  let form = "";

  if (props.Labeltype === "login") {
    login = style.login;
  }

  if (props.Labeltype === "form") {
    form = style.form;
  }

  return (
    <div className={style.inputGroup}>
      <input
        className={classnames(style.inputs, hasErrors)}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.changed}
        placeholder={props.label}
      />
      <label className={classnames(login, form)} htmlFor={props.htmlFor}>
        {props.label}
      </label>
      {props.error && (
        <div className={style.errorMessage}>{props.errosMsg}</div>
      )}
    </div>
  );
};

export default InputGroup;
