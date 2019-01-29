import * as actionTypes from "../actions/actionTypes";

const initialState = {
  countries: null,
  errors: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTRY_OPEN_SUCCESS:
      return {
        ...state,
        countries: action.data
      };
    case actionTypes.COUNTRY_OPEN_FAILED:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default reducer;
