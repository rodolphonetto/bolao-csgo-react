import React, { Component } from "react";
import axios from "axios";

// import Spinner from "../Layout/Spinner";

class Finished extends Component {
  state = {
    matches: ""
  };

  getMatches = async () => {
    const matches = await axios.get(
      `${process.env.REACT_APP_URL_START}/bets/finished`
    );
    return matches;
  };

  async componentDidMount() {
    const matches = await this.getMatches();
    this.setState({
      matches: matches.data
    });
  }

  render() {
    return <h1>Breve</h1>;
  }
}
export default Finished;
