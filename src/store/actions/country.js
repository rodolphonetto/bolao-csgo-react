import * as actionTypes from "./actionTypes";
import * as authActions from "./index";

import axios from "axios";

// COUNTRY SELECTION
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

// COUNTRY EDIT
export const countryEditOpen = countryID => {
  return dispatch => {
    dispatch(countryLoading());
    axios
      .get(
        `${process.env.REACT_APP_URL_START}/countries/edit-country/${countryID}`
      )
      .then(countries => {
        dispatch(countryEditOpenSuccess(countries.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(countryEditOpenFailed(err.response.data));
        // dispatch(authActions.logout());
      });
  };
};

export const countryEditOpenSuccess = country => {
  return {
    type: actionTypes.COUNTRY_EDIT_OPEN_SUCCESS,
    country: country
  };
};

export const countryEditOpenFailed = errors => {
  return {
    type: actionTypes.COUNTRY_EDIT_OPEN_FAILED,
    errors: errors
  };
};

export const countryEditSave = countryData => {
  return dispatch => {
    dispatch(countryLoading());
    axios
      .post(
        `${process.env.REACT_APP_URL_START}/countries/add-country`,
        countryData
      )
      .then(country => {
        dispatch(countryEditSaveSuccess(country.data));
      })
      .catch(err => {
        dispatch(countryEditSaveFailed(err.response.data));
        // dispatch(authActions.logout());
      });
  };
};

export const countryEditSaveSuccess = country => {
  return {
    type: actionTypes.COUNTRY_EDIT_SAVE_SUCCESS,
    country: country
  };
};

export const countryEditSaveFailed = errors => {
  return {
    type: actionTypes.COUNTRY_EDIT_SAVE_FAILED,
    loading: false,
    errors: errors
  };
};