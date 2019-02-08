import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../../../../store/actions/index";

import InputGroup from "../../../Layout/InputGroup/InputGroup";
import InputSelect from "../../../Layout/InputSelect/InputSelect";
import Form from "../../../Layout/Form/Form";

class MatchEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ""
    };
  }

  componentDidMount() {
    this.setState({
      desc: this.props.desc
    });
  }

  onSubmit = event => {
    event.preventDefault();

    const form = document.forms.namedItem("editmatch");

    const matchData = new FormData(form);

    this.props.onMatchEditSave(matchData);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form
        name="editMatch"
        sendAction="onMatchEditSave"
        formStyle="formWhite"
        title="Editar Partida"
        btStyle="formWhite"
        btText="Editar"
      >
        <InputGroup
          label="Descrição"
          Labeltype="form"
          htmlFor="desc"
          type="text"
          name="desc"
          value={this.state.desc}
          changed={this.onChangeHandler}
          error={this.props.errors.resultAEmpty}
          errosMsg={this.props.errors.resultAEmpty}
        />
        <InputSelect
          name="teamA"
          label="Time A"
          Labeltype="form"
          placeholder="Time A"
          error={this.props.errors.teamA}
          errosMsg={this.props.errors.teamA}
          teamname={this.props.teamA.name}
          teamID={this.props.teamA._id}
        />
        <InputSelect
          name="teamB"
          label="Time B"
          Labeltype="form"
          placeholder="Time B"
          error={this.props.errors.teamB}
          errosMsg={this.props.errors.teamB}
          teamname={this.props.teamB.name}
          teamID={this.props.teamB._id}
        />
        <input type="hidden" name="matchID" value={this.props.partidaID} />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    edited: state.match.edited,
    errors: state.match.errors,
    loading: state.match.loading
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onMatchEditSave: matchData => dispatch(Actions.matchEditSave(matchData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(MatchEdit);