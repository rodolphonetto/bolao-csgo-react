import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../../store/actions/index";

import style from "./CountryAdd.module.scss";

import InputGroup from "../../Layout/InputGroup/InputGroup";
import ConfirmButton from "../../Layout/ConfirmButton";

class CountryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidUpdate() {
    if (this.props.edited) {
      this.props.history.goBack();
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const form = document.forms.namedItem("addCountry");

    const countryData = new FormData(form);

    this.props.countryAdd(countryData);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className={style.countryEdit}>
        <div className={style.Form}>
          <form
            onSubmit={this.onSubmit}
            name="addCountry"
            encType="multipart/form-data"
          >
            <InputGroup
              label="Nome:"
              Labeltype="form"
              htmlFor="name"
              type="text"
              name="name"
              value={this.state.name}
              changed={this.onChangeHandler}
              errors={this.props.errors.name}
              errosMsg={this.props.errors.name}
            />
            <InputGroup
              label="Bandeira:"
              Labeltype="form"
              htmlFor="image"
              type="file"
              name="image"
              errors={this.props.errors.file}
              errosMsg={this.props.errors.file}
            />
            <ConfirmButton>Confirmar</ConfirmButton>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    edited: state.country.edited,
    errors: state.country.errors
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    countryAdd: countryData => dispatch(countryActions.countryAdd(countryData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CountryEdit);
