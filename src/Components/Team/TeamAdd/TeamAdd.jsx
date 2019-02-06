import React, { Component } from "react";
import { connect } from "react-redux";

import style from "./TeamAdd.module.scss";

import Form from "../../Layout/Form/Form";
import InputGroup from "../../Layout/InputGroup/InputGroup";
import SelectGroup from "../../Layout/SelectGroup/SelectGroup";
import InputSelect from "../../Layout/InputSelect/InputSelect";

class CountryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.edited) {
      this.props.history.goBack();
    }
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className={style.teamEdit}>
        <Form
          name="addteam"
          title="Adicionar Time"
          formStyle="formWhite"
          btStyle="formWhite"
          btText="Adicionar"
          sendAction="teamAdd"
        >
          <InputGroup
            label="Nome"
            Labeltype="form"
            htmlFor="name"
            type="text"
            name="name"
            value={this.state.name}
            changed={this.onChangeHandler}
            error={this.props.errors.name}
            errosMsg={this.props.errors.name}
          />
          <InputGroup
            label="Logo"
            Labeltype="form"
            htmlFor="image"
            type="file"
            name="image"
            error={this.props.errors.file}
            errosMsg={this.props.errors.file}
          />
          <SelectGroup
            name="country"
            label="País"
            Labeltype="form"
            htmlFor="image"
          />
          <InputSelect
            name="teste"
            label="teste"
            Labeltype="form"
            htmlFor="teste"
            placeholder="Digite um time"
            clicked={this.onChangeHandler}
          >
            Teste
          </InputSelect>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    edited: state.team.edited,
    errors: state.team.errors
  };
};

export default connect(mapStateToProps)(CountryEdit);
