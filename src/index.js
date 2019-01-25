import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import authReducer from "./store/reducers/auth";
import userReducer from "./store/reducers/user";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
