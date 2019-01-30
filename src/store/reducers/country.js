import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  countries: [],
  country: null,
  errors: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTRY_CLICK:
      return {
        ...state,
        country: null
      };
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
        errors: {}
      };
    case actionTypes.COUNTRY_OPEN_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    case actionTypes.COUNTRY_EDIT_OPEN_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.country,
        errors: {}
      };
    case actionTypes.COUNTRY_EDIT_SAVE_SUCCESS:
      const oldCountries = [...state.countries].filter(
        country => country._id !== action.country._id
      );

      return {
        ...state,
        loading: false,
        country: null,
        countries: oldCountries.concat(action.country),
        errors: {}
      };
    case actionTypes.COUNTRY_EDIT_SAVE_FAILED:
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
