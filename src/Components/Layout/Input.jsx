import React from "react";
import style from "./scss/Input.module.scss";

const Input = props => {
  return (
    <input
      className={style.inputs}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.changed}
    />
  );
};

export default Input;
