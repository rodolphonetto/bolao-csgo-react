import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "../../../../store/actions/index";

import Button from "../../../Layout/Button";

import style from "./TeamItem.module.scss";

const TeamItem = props => {
  const onDelete = teamID => {
    props.countryDel(teamID);
  };
  return (
    <div className={style.TeamItem}>
      <span className={style.name}>{props.name}</span>
      <img
        className={style.logo}
        src={`${process.env.REACT_APP_URL_IMG}/${props.logo}`}
        alt={`Logo do ${props.name}`}
      />
      <img
        className={style.flag}
        src={`${process.env.REACT_APP_URL_IMG}/${props.country.flag}`}
        alt={`Nacionalidade do ${props.name}`}
      />
      <Link to={`${props.url}/edit-team/${props._id}`}>
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
    teamDel: teamID => dispatch(Actions.teamDel(teamID))
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(TeamItem);
