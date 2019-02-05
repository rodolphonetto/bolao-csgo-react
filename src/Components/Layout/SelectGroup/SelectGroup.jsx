import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../../../store/actions/index";

import classnames from "classnames";

import style from "./SelectGroup.module.scss";

class SelectGroup extends Component {
  componentDidMount() {
    this.props.countryOpen("?page=1&maxItems=10000");
  }

  render() {
    this.hasErrors = "";

    if (this.props.error) {
      this.hasErrors = style.hasErrors;
    }

    // Label Classes
    this.login = "";
    this.form = "";

    if (this.props.Labeltype === "login") {
      this.login = style.login;
    }

    if (this.props.Labeltype === "form") {
      this.form = style.form;
    }

    const countries = this.props.countries.map((country, index) => {
      console.log(country);
      return (
        <option key={index} value={country._id}>
          {country.name}
        </option>
      );
    });

    return (
      <div className={style.inputGroup}>
        <select
          className={classnames(style.inputs, this.hasErrors)}
          name={this.props.name}
        >
          {countries}
        </select>
        <label
          className={classnames(this.login, this.form)}
          htmlFor={this.props.htmlFor}
        >
          {this.props.label}
        </label>
        {this.props.error && (
          <div className={style.errorMessage}>{this.props.errosMsg}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.country.countries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countryOpen: data => dispatch(Actions.countryOpen(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectGroup);
