import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import style from "./DashBoard.module.scss";

import NavBar from "../Layout/NavBar";
import Logout from "../Login/Logout";
import Country from "../Country/Country";
import CountryEdit from "../Country/CountryEdit/CountryEdit";

class Dashboard extends Component {
  render() {
    return (
      <div className={style.general}>
        <NavBar />
        <div className={style.panel}>
          <Route
            path={`${this.props.match.url}/countries`}
            component={Country}
          />
          <Route
            path={`${this.props.match.url}/edit-country/:id`}
            component={CountryEdit}
          />
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
