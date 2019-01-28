import React from "react";
import style from "./scss/InputError.module.scss";

const InputError = props => {
  return <div className={style.errorMessage}>{props.children}</div>;
};

export default InputError;
