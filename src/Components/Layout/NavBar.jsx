import React from "react";
import style from "./scss/NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.menuOption}>Login</li>
        <li className={style.menuOption}>Cadastre-se</li>
      </ul>
    </nav>
  );
};

export default NavBar;
