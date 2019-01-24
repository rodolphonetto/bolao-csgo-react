import { bindActionCreators } from "../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
