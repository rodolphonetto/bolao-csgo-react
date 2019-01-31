import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../../../store/actions/index";

import style from "./CountryList.module.scss";

import CountryItem from "./CountryItem/CountryItem";
import Button from "../../Layout/Button";

class CountryList extends Component {
  componentDidMount() {
    this.props.countryOpen();
  }

  render() {
    const countries = this.props.countries.map((country, index) => {
      return <CountryItem key={index} {...country} />;
    });

    return (
      <>
        {this.props.isAuth && <Button type="ok">Novo Pais</Button>}
        <div className={style.countries}>{countries}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    countries: state.country.countries
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    countryOpen: () => dispatch(Actions.countryOpen())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CountryList);
