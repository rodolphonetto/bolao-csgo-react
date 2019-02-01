import React from "react";
import style from "./scss/Label.module.scss";

const Label = props => {
  let classe = [];

  if (props.type === "login") {
    classe.push(style.login);
  }

  if (props.type === "form") {
    classe.push(style.form);
  }

  const finalClass = classe.join(" ");

  return (
    <label className={finalClass} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default Label;
