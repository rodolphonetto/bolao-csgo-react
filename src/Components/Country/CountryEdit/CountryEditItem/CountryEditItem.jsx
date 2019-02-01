import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../../../store/actions/index";

import style from "./CountryEditItem.module.scss";

import Label from "../../../Layout/Label";
import Input from "../../../Layout/Input";
import InputError from "../../../Layout/InputError";
import ConfirmButton from "../../../Layout/ConfirmButton";

class CountryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name
    });
  }

  onSubmit = event => {
    event.preventDefault();

    const form = document.forms.namedItem("editCountry");

    const countryData = new FormData(form);

    this.props.onCountryEditSave(countryData);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className={style.Form}>
        <form
          onSubmit={this.onSubmit}
          name="editCountry"
          encType="multipart/form-data"
        >
          <div className={style.inputGroup}>
            <Label type="form">Nome</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name} //funcionando
              changed={this.onChangeHandler}
            />
            {this.props.errors.name && (
              <InputError>{this.props.errors.name}</InputError>
            )}
          </div>
          <div className={style.inputGroup}>
            <Label type="form">Bandeira</Label>
            <Input name="image" type="file" />
          </div>
          <input type="hidden" name="countryID" value={this.props.countryID} />
          <ConfirmButton>Atualizar</ConfirmButton>
        </form>
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
    onCountryEditSave: countryData =>
      dispatch(countryActions.countryEditSave(countryData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CountryEdit);
