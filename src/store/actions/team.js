import * as actionTypes from "./actionTypes";

import axios from "axios";
import { decode } from "qss";

// TEAM SELECTION
export const teamOpen = data => {
  return dispatch => {
    let page = decode(data.substring(1));
    page = page.page;
    dispatch(teamLoading());
    axios
      .get(
        `${process.env.REACT_APP_URL_START}/teams/`,

        {
          params: {
            page: page
          }
        }
      )
      .then(teams => {
        console.log(teams);
        dispatch(teamOpenSuccess(teams.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(teamOpenFailed(err.response));
      });
  };
};

export const teamLoading = teams => {
  return {
    type: actionTypes.TEAM_LOADING,
    data: teams
  };
};

export const teamOpenSuccess = teams => {
  return {
    type: actionTypes.TEAM_OPEN_SUCCESS,
    data: teams
  };
};

export const teamOpenFailed = errors => {
  return {
    type: actionTypes.TEAM_OPEN_FAILED,
    errors: errors
  };
};

// TEAM DELETE

export const teamDel = team => {
  return dispatch => {
    dispatch(teamLoading());
    axios
      .put(
        `${process.env.REACT_APP_URL_START}/countries/del-team/${team}`,
        team
      )
      .then(success => {
        console.log(success);
        dispatch(teamDelSuccess(success.data.msg, success.data.teamID));
      })
      .catch(err => {
        dispatch(teamDelFailed(err.response.data));
      });
  };
};

export const teamDelSuccess = (msg, teamID) => {
  return {
    type: actionTypes.TEAM_DEL_SUCCESS,
    msg: msg,
    team: teamID
  };
};

export const teamDelFailed = errors => {
  return {
    type: actionTypes.TEAM_DEL_FAILED,
    errors: errors
  };
};
