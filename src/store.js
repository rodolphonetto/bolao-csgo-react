import authReducer from "./store/reducers/auth";
import signupReducer from "./store/reducers/signup";
import countryReducer from "./store/reducers/country";
import teamReducer from "./store/reducers/team";
import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  country: countryReducer,
  team: teamReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
