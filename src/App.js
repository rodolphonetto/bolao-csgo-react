import React, { Component } from "react";
import Landing from "./Components/Layout/Landing";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
