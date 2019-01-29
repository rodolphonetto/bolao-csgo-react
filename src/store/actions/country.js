import * as actionTypes from "./actionTypes";
import axios from "axios";

export const countryOpen = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_URL_START}/countries`)
      .then(countries => {
        dispatch(countryOpenSuccess(countries.data));
      })
      .catch(err => {
        dispatch(countryOpenFailed(err.response.data));
      });
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
