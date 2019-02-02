import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "../../../store/actions/index";

import style from "./CountryList.module.scss";

import Spinner from "../../Layout/Spinner";
import CountryItem from "./CountryItem/CountryItem";
import Button from "../../Layout/Button";

class CountryList extends Component {
  componentDidMount() {
    this.props.countryOpen();
  }

  render() {
    const countries = this.props.countries.map((country, index) => {
      return (
        <CountryItem url={this.props.match.url} key={index} {...country} />
      );
    });

    return this.props.loading ? (
      <Spinner />
    ) : (
      <>
        <div className={style.wrapper}>
          <div className={style.countries}>{countries}</div>
          {this.props.isAuth && (
            <div className={style.controlls}>
              <Link to={`${this.props.match.url}/add-country`}>
                <Button btStyle="ok">Novo País</Button>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    countries: state.country.countries,
    loading: state.country.loading
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
