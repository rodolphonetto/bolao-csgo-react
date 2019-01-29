import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../store/actions/index";

import style from "./Country.module.scss";

import Spinner from "../Layout/Spinner";

export class Country extends Component {
  componentDidMount() {
    this.props.countryOpen();
  }

  render() {
    return (
      <>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div className={style.countries}>
            <h1>Países</h1>
            {this.props.errors && <h1>Você não está autorizado</h1>}
            {this.props.countries.map((country, index) => {
              return <h1 key={index}>{country.name}</h1>;
            })}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.country.loading,
    countries: state.country.countries,
    errors: state.country.errors
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    countryOpen: () => dispatch(countryActions.countryOpen())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Country);
