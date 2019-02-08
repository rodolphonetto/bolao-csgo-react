import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import BetList from "./BetList/BetList";
// import CountryEdit from "./CountryEdit/CountryEdit";
// import CountryAdd from "./CountryAdd/CountryAdd";
class Bet extends Component {
  componentDidUpdate() {
    if (!this.props.isAuth) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 2000);
    }
  }

  render() {
    return (
      <>
        {!this.props.isAuth && <h1>Você não está autorizado</h1>}
        <Route path={`${this.props.match.url}`} exact component={BetList} />
        {/* <Route
          path={`${this.props.match.url}/edit-country/:_id`}
          component={CountryEdit}
        />
        <Route
          path={`${this.props.match.url}/add-country`}
          component={CountryAdd}
        /> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    loading: state.bet.loading,
    bets: state.bet.bets
  };
};

export default connect(mapStateToProps)(Bet);
