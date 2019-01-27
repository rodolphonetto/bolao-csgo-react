import * as actionTypes from "./actionTypes";
import axios from "axios";

export const singupSucess = msg => {
  return {
    type: actionTypes.SIGNUP_SUCESS,
    msg: msg
  };
};

export const singupFailed = errors => {
  return {
    type: actionTypes.SIGNUP_FAILED,
    errors: errors
  };
};

export const singup = newUser => {
  return dispatch => {
    axios
      .post(`${process.env.REACT_APP_URL_START}/auth/signup`, newUser)
      .then(response => {
        dispatch(singupSucess(response.data));
      })
      .catch(err => {
        dispatch(singupFailed(err.response.data));
      });
  };
};
