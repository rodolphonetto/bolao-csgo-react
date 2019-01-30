import React, { Component } from "react";
import { connect } from "react-redux";

import style from "./CountryEdit.module.scss";

import Label from "../../Layout/Label";
import Input from "../../Layout/Input";
import ConfirmButton from "../../Layout/ConfirmButton";

export class CountryEdit extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={style.Form}>
        <form>
          <div className={style.inputGroup}>
            <Label>Nome</Label>
            <Input />
          </div>
          <div className={style.inputGroup}>
            <Label>Bandeira</Label>
            <Input type="file" />
          </div>
          <ConfirmButton>Atualizar</ConfirmButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryEdit);
