import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as countryActions from "../../../../store/actions/index";

import style from "./CountryItem.module.scss";

const CountryItem = props => {
  return (
    <div className={style.CountryItem}>
      <span className={style.name}>{props.name}</span>
      <img
        className={style.flag}
        src={`${process.env.REACT_APP_URL_IMG}/${props.flag}`}
        alt={`Bandeira da ${props.name}`}
      />
      <Link to={`${props.url}/edit-country/${props._id}`}>
        <button className={style.edit}>Editar</button>
      </Link>
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
