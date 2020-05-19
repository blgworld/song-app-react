import React, { Component } from "react";

import "./App.css";
import Home from "./components/Home";
import Rain from "./components/Rain";
import Ghibli from "./components/Ghibli";
import classical from "./components/Classical";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
class App extends Component {
  render() {
    return (
      <Router>
        <div className="All">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Rain" component={Rain} />
            <Route path="/Ghibli" component={Ghibli} />
            <Route path="/Classical" component={classical} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
