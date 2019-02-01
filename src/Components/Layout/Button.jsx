import React from "react";
import style from "./scss/Button.module.scss";

const Button = props => {
  let classe = [];

  if (props.type === "ok") {
    classe.push(style.ok);
  } 
  
  if (props.type === "remove") {
    classe.push(style.remove);
  } 
  
  if (props.controls === "yes") {
    classe.push(style.controls);
  }

  const finalClass = classe.join(" ");

  return <button className={finalClass}>{props.children}</button>;
};

export default Button;
