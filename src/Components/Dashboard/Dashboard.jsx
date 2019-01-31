import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import style from "./DashBoard.module.scss";

import NavBar from "../Layout/NavBar";
import Logout from "../Login/Logout";
import Country from "../Country/Country";

class Dashboard extends Component {
  render() {
    return (
      <div className={style.general}>
        <NavBar />
        <div className={style.panel}>
          oi
          <Route path="/dashboard/countries" component={Country} />
        </div>
        <Route path="/logout" exact component={Logout} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
