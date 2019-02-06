import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import * as Actions from "../../../store/actions/index";

import classnames from "classnames";

import style from "./InputSelect.module.scss";

class InputSelect extends Component {
  componentDidMount() {
    this.props.teamOpen("?page=1&maxItems=10000");
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

    this.options = this.props.teams.map((team, index) => {
      console.log(team);
      if (team._id === this.props.selected) {
        return {
          value: team._id,
          label: team.name
        };
      }
      return {
        value: team._id,
        label: team.name
      };
    });

    return (
      <div className={style.inputGroup}>
        <Select
          className={style.inputs}
          options={this.options}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.clicked}
        />
        <label
          className={classnames(this.login, this.form)}
          htmlFor={this.props.htmlFor}
        >
          {this.props.label}
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.team.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    teamOpen: data => dispatch(Actions.teamOpen(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSelect);
