import React from "react";
import classnames from "classnames";

import style from "./scss/Button.module.scss";

const Button = props => {
  let ok = null
  let remove = null
  let formBlack = null
  let formWhite = null
  let controls = null

  if (props.btStyle === "ok") {
    ok = style.ok;
  }

  if (props.btStyle === "remove") {
    remove = style.remove;
  }

  if (props.btStyle === "formBlack") {
    formBlack = style.formBlack;
  }

  if (props.btStyle === "formWhite") {
    formWhite = style.formWhite;
  }

  if (props.controls === true) {
    controls = style.controls;
  }

  return (
    <button className={classnames(ok, remove, formBlack, formWhite, controls)}>
      {props.children}
    </button>
  );
};

export default Button;
