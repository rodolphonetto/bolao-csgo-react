import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "../../store/actions/index";

import style from "./scss/NavBar.module.scss";

const NavBar = props => {
  const onCountryClick = e => {
    e.preventDefault();
    props.onCountryClick();
  };

  return (
    <nav className={style.navbar}>
      <ul>
        {props.isAuthenticated && (
          <Link onClick={e => onCountryClick(e)} to="/countries/">
            <li className={style.menuOption}>Países</li>
          </Link>
        )}
        {!props.isAuthenticated && (
          <Link to="/signup">
            <li className={style.menuOption}>Cadastre-se</li>
          </Link>
        )}
        {props.isAuthenticated ? (
          <Link to="/logout">
            <li className={style.menuOption}>Logout</li>
          </Link>
        ) : (
          <Link to="/">
            <li className={style.menuOption}>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onCountryClick: () => dispatch(Actions.countryClick())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(NavBar);
