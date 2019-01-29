import React from "react";

import { connect } from "react-redux";

import * as countryActions from "../../../store/actions/index";

import style from "./CountryItem.module.scss";

const CountryItem = props => {
  const onEditClick = e => {
    e.persist();
    console.log(props._id);
    props.countryEditOpen(props._id);
  };

  return (
    <div className={style.CountryItem}>
      <span className={style.name}>{props.name}</span>
      <img
        className={style.flag}
        src={`${process.env.REACT_APP_URL_IMG}/${props.flag}`}
        alt={`Bandeira da ${props.name}`}
      />
      <button onClick={e => onEditClick(e)} className={style.edit}>
        Editar
      </button>
      <button className={style.remove}>Remover</button>
    </div>
  );
};

const mapDispatchtoProps = dispatch => {
  return {
    countryEditOpen: countryID =>
      dispatch(countryActions.countryEditOpen(countryID))
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(CountryItem);
