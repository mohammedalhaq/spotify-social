import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Homepage/Home";
import Login from "./components/Loginpage/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/redirect">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;