import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  teams: [],
  team: {},
  errors: {},
  edited: false,
  navigation: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEAM_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.TEAM_OPEN_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: action.data.teams,
        navigation: {
          currentPage: action.data.currentPage,
          hasNextPage: action.data.hasNextPage,
          hasPrevPage: action.data.hasPrevPage,
          nextPage: action.data.nextPage,
          previousPage: action.data.previousPage,
          lastPage: action.data.lastPage
        },
        errors: {},
        team: {},
        edited: false
      };
    case actionTypes.TEAM_OPEN_FAILED:
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
