import React from "react";
import classnames from "classnames";

import style from "./scss/Button.module.scss";

const Button = props => {
  let ok = null;
  let remove = null;
  let formBlack = null;
  let formWhite = null;
  let controlls = null;

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
  if (props.btStyle === "edit") {
    formWhite = style.edit;
  }

  if (props.controlls === "yes") {
    controlls = style.controlls;
  }

  return (
    <button
      onClick={props.clicked}
      className={classnames(ok, remove, formBlack, formWhite, controlls)}
    >
      {props.children}
    </button>
  );
};

export default Button;
