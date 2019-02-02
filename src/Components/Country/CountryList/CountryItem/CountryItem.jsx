import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "../../../../store/actions/index";

import Button from "../../../Layout/Button";

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
        <Button btStyle="edit">Editar</Button>
      </Link>
      <Button clicked={() => onDelete(props._id)} btStyle="remove">
        Excluir
      </Button>
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
