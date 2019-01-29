import React from "react";
import style from "./scss/Landing.module.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
import Country from "../Country/Country";

const Landing = () => {
  return (
    <div className={style.landing}>
      <NavBar />
      <Route path="/signup" exact component={Signup} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/countries" exact component={Country} />
      <Route path="/" exact component={Login} />
    </div>
  );
};

export default Landing;
