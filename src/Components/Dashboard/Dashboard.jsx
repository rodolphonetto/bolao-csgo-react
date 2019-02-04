import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import style from "./DashBoard.module.scss";

import Spinner from "../Layout/Spinner";
import NavBar from "../Layout/NavBar";
import Logout from "../Login/Logout";
import Country from "../Country/Country";
import CountryEdit from "../Country/CountryEdit/CountryEdit";

class Dashboard extends Component {
  teste(e) {
    e.preventDefault();
    this.props.history.push(`${this.props.match.url}/countries?page=2`);
  }

  render() {
    return (
      <>
        <div className={style.general}>
          <NavBar />
          {this.props.loading && <Spinner />}
          {!this.props.isAuth ? (
            <h1>Você não está autorizado</h1>
          ) : (
            this.props.isAuth && (
              <>
                <div className={style.panel}>
                  <div className={style.panelBar}>
                    <Link
                      to={{
                        pathname: `${this.props.match.url}/countries`,
                        search: "page=1"
                      }}
                    >
                      Paises
                    </Link>
                    <Link to={`${this.props.match.url}/countries`}>Times</Link>
                    <Link to={`${this.props.match.url}/countries`}>
                      Players
                    </Link>
                    <Link to={`${this.props.match.url}/countries`}>
                      Partidas
                    </Link>
                  </div>
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
              </>
            )
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated,
  lading: state.country.loading
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
