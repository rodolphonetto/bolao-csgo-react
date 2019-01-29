import * as actionTypes from "./actionTypes";
import * as authActions from "./index";

import axios from "axios";

export const countryOpen = () => {
  return dispatch => {
    dispatch(countryLoading());
    axios
      .get(`${process.env.REACT_APP_URL_START}/countries`)
      .then(countries => {
        dispatch(countryOpenSuccess(countries.data));
      })
      .catch(err => {
        dispatch(countryOpenFailed(err.response.data));
        dispatch(authActions.logout());
      });
  };
};

export const countryLoading = countries => {
  return {
    type: actionTypes.COUNTRY_LOADING,
    data: countries
  };
};

export const countryOpenSuccess = countries => {
  return {
    type: actionTypes.COUNTRY_OPEN_SUCCESS,
    data: countries
  };
};

export const countryOpenFailed = errors => {
  return {
    type: actionTypes.COUNTRY_OPEN_FAILED,
    errors: errors
  };
};
