import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../store/actions/index";
import style from "./Country.module.scss";

import ConfirmButton from "../Layout/ConfirmButton";
import Button from "../Layout/Button";
import CountryItem from "./CountryItem/CountryItem";
import CountryEdit from "./CountryEdit/CountryEdit";
import Spinner from "../Layout/Spinner";

class Country extends Component {
  componentDidMount() {
    this.props.countryOpen();
  }

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
        <Button type="ok">Novo Pais</Button>
        {!this.props.isAuth && <h1>Você não está autorizado</h1>}
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
            <CountryEdit
              name={this.props.country.name}
              countryID={this.props.country._id}
            />
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
    isAuth: state.auth.isAuthenticated,
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
