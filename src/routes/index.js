import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import ViewMap from './ViewMap';
import Submit from './Submit';
import About from './About';
import Contact from './Contact';
import Faq from './Faq';
import NoMatch from './NoMatch';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/map" component={ViewMap}/>
      <Route path="/submit" component={Submit}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/faq" component={Faq}/>
      <Route path="*" component={NoMatch}/>
    </Switch>
  );
}

