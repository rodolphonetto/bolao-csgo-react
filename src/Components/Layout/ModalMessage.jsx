import React from "react";
import style from "./scss/ModalMessage.module.scss";

const ModalMessage = props => {
  let classe = null;

  if (props.type === "error") {
    classe = style.error;
  } else if (props.type === "ok") {
    classe = style.ok;
  }

  return (
    <div>
      <p className={classe}>{props.children}</p>
    </div>
  );
};

export default ModalMessage;
