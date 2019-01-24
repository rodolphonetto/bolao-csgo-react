import React, { Component } from "react";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => {
  [], {}, applyMiddleware();
});

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
