import React, { Component } from "react";
import axios from "axios";

import Spinner from "../Layout/Spinner";
import style from "./Ranking.module.scss";

class Ranking extends Component {
  state = {
    users: ""
  };

  getRanking = async () => {
    const users = await axios.get(
      `${process.env.REACT_APP_URL_START}/bets/ranking`
    );
    return users;
  };

  async componentDidMount() {
    const users = await this.getRanking();
    this.setState({
      users: users.data
    });
  }

  render() {
    let userRanked;
    let userPoints;
    if (this.state.users) {
      userRanked = this.state.users.map((user, index) => {
        return (
          <div key={index} className={style.username}>
            {user.username}
          </div>
        );
      });
      userPoints = this.state.users.map((user, index) => {
        return (
          <div key={index} className={style.points}>
            {user.points}
          </div>
        );
      });
    }

    return (
      <div>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <div className={style.rankingTable}>
            <span className={style.titles}>Players</span>
            <span className={style.titles}>Pontos</span>
            <div>{userRanked}</div>
            <div>{userPoints}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Ranking;
