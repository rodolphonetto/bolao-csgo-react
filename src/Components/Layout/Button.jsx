import React from "react";
import style from "./scss/Button.module.scss";

const Button = props => {
  return (
    <div>
      <button className={style.buttonConfirm}>{props.children}</button>
    </div>
  );
};

export default Button;
