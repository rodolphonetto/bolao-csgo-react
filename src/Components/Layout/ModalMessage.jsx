import React from "react";
import style from "./scss/ModalMessage.module.scss";

const ModalMessage = props => {
  return (
    <div className={style.modalBackground}>
      <p className={style.modalText}>{props.message}</p>
    </div>
  );
};

export default ModalMessage;
