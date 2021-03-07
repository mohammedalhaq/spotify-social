import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Homepage/Home";
import Login from "./components/Loginpage/Login";
import Main from "./components/Homepage/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/redirect">
              <Home />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;