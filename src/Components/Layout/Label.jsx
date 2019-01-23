import React from "react";
import style from "./scss/Label.module.scss";

const Label = props => {
  return (
    <label className={style.labels} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default Label;
