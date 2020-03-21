import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import ViewMap from './ViewMap';
import Submit from './Submit';
import About from './About';
import NoMatch from './NoMatch';

export default () => {
  return (
    <Router>
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/map">
          <ViewMap />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

