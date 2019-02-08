import React, { Component } from "react";

import { connect } from "react-redux";

import * as Actions from "../../../../store/actions/index";
import style from "./BetItem.module.scss";
import Form from "../../../Layout/Form/Form";
import InputGroup from "../../../Layout/InputGroup/InputGroup";

class BetItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultA: "",
      resultB: ""
    };
  }

  onChangeHandler = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    console.log(this.props._id);
    console.log(this.state);
    return (
      <Form
        name={this.props._id}
        formStyle="formBet"
        btStyle="formBet"
        btText="Confirmar"
        sendAction="betAdd"
      >
        <div className={style.betItem}>
          <span className={style.desc}>{this.props.desc} </span>
          <div className={style.teamA}>
            <span className={style.name}>{this.props.teamA.name}</span>
            <img
              className={style.logo}
              src={`${process.env.REACT_APP_URL_IMG}/${this.props.teamA.logo}`}
              alt={`Logo do ${this.props.teamA.name}`}
            />

            <InputGroup
              htmlFor="resultA"
              type="text"
              name="resultA"
              bet="sim"
              value={this.state.resultA}
              changed={this.onChangeHandler}
              // error={this.props.errors.name}
              // errosMsg={this.props.errors.name}
            />
          </div>
          <div className={style.teamB}>
            <span className={style.name}>{this.props.teamB.name}</span>
            <img
              className={style.logo}
              src={`${process.env.REACT_APP_URL_IMG}/${this.props.teamB.logo}`}
              alt={`Logo do ${this.props.teamB.name}`}
            />
            <InputGroup
              htmlFor="resultB"
              type="text"
              name="resultB"
              bet="sim"
              value={this.state.resultB}
              changed={this.onChangeHandler}
              // error={this.props.errors.name}
              // errosMsg={this.props.errors.name}
            />
          </div>
        </div>
        <input type="hidden" name="matchID" value={this.props._id} />
        <input type="hidden" name="userID" value={this.props.userID} />
        <input type="hidden" name="betID" value={this.props.betID} />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    userID: state.auth.currentUser.userid,
    errors: state.bet.loading
  };
};
export default connect(mapStateToProps)(BetItem);
