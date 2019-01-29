import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  countries: [],
  errors: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTRY_LOADING:
      return {
        ...state,
        loading: true
      };

    case actionTypes.COUNTRY_OPEN_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.data,
        errors: null
      };
    case actionTypes.COUNTRY_OPEN_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default reducer;
