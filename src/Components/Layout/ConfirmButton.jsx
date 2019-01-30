import React from "react";
import style from "./scss/ConfirmButton.module.scss";

const ConfirmButton = props => {
  return (
    <div>
      <button className={style.ConfirmButton} type={props.type}>
        {props.children}
      </button>
    </div>
  );
};

export default ConfirmButton;
