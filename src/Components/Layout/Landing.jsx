import React from "react";
import style from "./scss/Landing.module.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "../Signup/Signup";

const Landing = () => {
  return (
    <div className={style.landing}>
      <NavBar />
      <Route path="/" exact component={Signup} />
    </div>
  );
};

export default Landing;
