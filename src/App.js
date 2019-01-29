import React, { Component } from "react";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loginSuccess } from "./store/actions/index";
import { Provider } from "react-redux";
import setAuthToken from "./util/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "./store";

// Check token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
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
            <Route path="/" component={Landing} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
