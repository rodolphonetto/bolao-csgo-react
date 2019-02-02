import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "../../../../store/actions/index";

import style from "./CountryItem.module.scss";

const CountryItem = props => {
  const onDelete = countryID => {
    props.countryDel(countryID);
  };
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
      <button onClick={() => onDelete(props._id)} className={style.remove}>
        Excluir
      </button>
    </div>
  );
};

const mapDispatchtoProps = dispatch => {
  return {
    countryDel: countryID => dispatch(Actions.countryDel(countryID))
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(CountryItem);
