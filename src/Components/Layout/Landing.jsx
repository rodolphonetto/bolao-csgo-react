import React from "react";
import style from "./scss/Landing.module.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const Landing = () => {
  return (
    <div className={style.landing}>
      <NavBar />
      <Route path="/signup" component={Signup} />
      <Route path="/" exact component={Login} />
    </div>
  );
};

export default Landing;
