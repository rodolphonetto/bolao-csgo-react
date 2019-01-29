import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import style from "./scss/NavBar.module.scss";

const NavBar = props => {
  return (
    <nav className={style.navbar}>
      <ul>
        {props.isAuthenticated ? (
          <Link to="/logout">
            <li className={style.menuOption}>Logout</li>
          </Link>
        ) : (
          <Link to="/">
            <li className={style.menuOption}>Login</li>
          </Link>
        )}
        <Link to="/signup">
          <li className={style.menuOption}>Cadastre-se</li>
        </Link>
        {props.isAuthenticated && (
          <Link to="/countries/">
            <li className={style.menuOption}>Países</li>
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

export default connect(mapStateToProps)(NavBar);
