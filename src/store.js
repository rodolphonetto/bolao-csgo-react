import authReducer from "./store/reducers/auth";
import signupReducer from "./store/reducers/signup";
import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
