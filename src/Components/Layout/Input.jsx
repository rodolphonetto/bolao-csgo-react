import React from "react";
import style from "./scss/Input.module.scss";

import classnames from "classnames";

const Input = props => {
  let hasErrors = "";

  // props.error.map(m => {
  //   console.log(m);
  // });

  console.log(props.error)
  if (props.error) {
    hasErrors = style.hasErrors;
  } 

  return (
    <input
      className={classnames(style.inputs, hasErrors)}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.changed}
    />
  );
};

export default Input;
