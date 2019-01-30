import React from "react";
import style from "./scss/Button.module.scss";

const Button = props => {
  let classe = null;

  if (props.type === "ok") {
    classe = style.ok;
  } else if (props.type === "remove") {
  }

  return <button className={classe}>{props.children}</button>;
};

export default Button;
