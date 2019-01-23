import React from "react";
import style from "./scss/Button.module.scss";

const ConfirmButton = props => {
  return (
    <div>
      <button className={style.ConfirmButton} type={props.type}>{props.children}</button>
    </div>
  );
};

export default ConfirmButton;
