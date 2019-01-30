import React, { Component } from "react";
import { connect } from "react-redux";

import * as countryActions from "../../../store/actions/index";

import style from "./CountryEdit.module.scss";

import Label from "../../Layout/Label";
import Input from "../../Layout/Input";
import ConfirmButton from "../../Layout/ConfirmButton";

class CountryEdit extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
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

  componentWillMount() {
    this.setState({
      name: this.props.name
    });
  }

  render() {
    return (
      <div className={style.Form}>
        <form
          onSubmit={this.onSubmit}
          name="editCountry"
          encType="multipart/form-data"
        >
          <div className={style.inputGroup}>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              changed={this.onChangeHandler}
            />
          </div>
          <div className={style.inputGroup}>
            <Label>Bandeira</Label>
            <Input name="image" type="file" />
          </div>
          <input type="hidden" name="countryID" value={this.props.countryID} />
          <ConfirmButton>Atualizar</ConfirmButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  country: state.country.country
});

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