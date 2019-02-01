import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loginSuccess } from "./store/actions/index";
import { Provider } from "react-redux";
import setAuthToken from "./util/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "./store";

import Landing from "./Components/Layout/Landing";
import DashBoard from "./Components/Dashboard/Dashboard";

// Check token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(loginSuccess(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact component={Landing} />
            <Route path="/logout" exact component={Landing} />
            <Route path="/dashboard" component={DashBoard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
