import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  matches: [],
  partida: {},
  errors: {},
  edited: false,
  navigation: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MATCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.MATCH_OPEN_SUCCESS:
      return {
        ...state,
        loading: false,
        matches: action.data.matches,
        navigation: {
          currentPage: action.data.currentPage,
          hasNextPage: action.data.hasNextPage,
          hasPrevPage: action.data.hasPrevPage,
          nextPage: action.data.nextPage,
          previousPage: action.data.previousPage,
          lastPage: action.data.lastPage
        },
        errors: {},
        partida: {},
        edited: false
      };
    case actionTypes.MATCH_OPEN_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors
      };

    case actionTypes.MATCH_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        errors: {},
        edited: true
      };
    case actionTypes.MATCH_ADD_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    case actionTypes.MATCH_EDIT_OPEN_SUCCESS:
      return {
        ...state,
        loading: false,
        partida: action.partida,
        errors: {}
      };
    case actionTypes.MATCH_EDIT_OPEN_FAILED:
      return {
        ...state,
        loading: false,
        partida: action.partida,
        errors: action.errors
      };
    case actionTypes.MATCH_EDIT_SAVE_SUCCESS:
      const oldmatches = [...state.matches].filter(
        partida => partida._id !== action.partida._id
      );

      return {
        ...state,
        loading: false,
        partida: {},
        matches: oldmatches.concat(action.partida),
        errors: {},
        edited: true
      };
    case actionTypes.MATCH_EDIT_SAVE_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors,
        edited: false
      };
    default:
      return state;
  }
};

export default reducer;
