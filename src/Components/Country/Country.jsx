import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CountryList from "./CountryList/CountryList";
import CountryEdit from "./CountryEdit/CountryEdit";
import Spinner from "../Layout/Spinner";

class Country extends Component {
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
        {this.props.loading && <Spinner />}
        <Route path="/countries" exact component={CountryList} />
        <Route path="/countries/edit-country/:_id" component={CountryEdit} />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    loading: state.country.loading,
    countries: state.country.countries
  };
};

const mapDispatchtoProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Country);
