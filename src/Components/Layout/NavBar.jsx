import React from "react";
import style from "./scss/NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <Link to="/">
          <li className={style.menuOption}>Login</li>
        </Link>
        <Link to="/signup">
          <li className={style.menuOption}>Cadastre-se</li>
        </Link>
        <Link to="/countries/">
          <li className={style.menuOption}>Países</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
