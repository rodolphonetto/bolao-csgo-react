import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../store/actions/index";
import style from "./Country.module.scss";

import CountryItem from "./CountryItem/CountryItem";
import CountryEdit from "./CountryEdit/CountryEdit";
import Spinner from "../Layout/Spinner";

export class Country extends Component {
  componentDidMount() {
    this.props.countryOpen();
  }

  componentDidUpdate() {
    if (this.props.errors) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 2000);
    }
  }

  render() {
    return (
      // <div className={style.countries}>
      <>
        {this.props.errors && <h1>Você não está autorizado</h1>}

        {this.props.loading ? (
          <Spinner />
        ) : !this.props.country ? (
          <div className={style.countries}>
            {this.props.countries.map((country, index) => {
              return (
                <CountryItem
                  key={index}
                  name={country.name}
                  flag={country.flag}
                  _id={country._id}
                />
              );
            })}
          </div>
        ) : (
          <div className={style.countryEdit}>
            <CountryEdit />
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
    errors: state.country.errors,
    country: state.country.country
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
