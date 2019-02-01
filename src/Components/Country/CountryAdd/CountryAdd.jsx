import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../../store/actions/index";

import style from "./CountryAdd.module.scss";

import Label from "../../Layout/Label";
import Input from "../../Layout/Input";
import InputError from "../../Layout/InputError";
import ConfirmButton from "../../Layout/ConfirmButton";

class CountryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidUpdate() {
    console.log("teste");
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
            <div className={style.inputGroup}>
              <Label type="form">Nome</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                changed={this.onChangeHandler}
              />
              {this.props.errors.name && (
                <InputError>{this.props.errors.name}</InputError>
              )}
            </div>
            <div className={style.inputGroup}>
              <Label type="form">Bandeira</Label>
              <Input name="image" type="file" />
              {this.props.errors.file && (
                <InputError>{this.props.errors.file}</InputError>
              )}
            </div>
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
