import * as actionTypes from "../actions/actionTypes";

const initialState = {
  msg: {},
  errors: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCESS:
      return {
        ...state,
        msg: action.msg,
        errors: {}
      };
    case actionTypes.SIGNUP_FAILED:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default reducer;
