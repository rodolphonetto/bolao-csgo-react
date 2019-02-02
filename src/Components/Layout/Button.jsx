import React from "react";
import classnames from "classnames";

import style from "./scss/Button.module.scss";

const Button = props => {
  let ok = "";
  let remove = "";
  let formBlack = "";
  let formWhite = "";
  let controls = "";

  if (props.style === "ok") {
    ok = style.ok;
  }

  if (props.style === "remove") {
    remove = style.remove;
  }

  if (props.style === "formBlack") {
    formBlack = style.formBlack;
  }

  if (props.style === "formWhite") {
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
