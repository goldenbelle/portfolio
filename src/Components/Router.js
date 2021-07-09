import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Nav from "./Nav";
import Contact from "../Routes/Contact";
import Home from "../Routes/Home/index.js";
import Portfolio from "../Routes/Portfolio";
import Detail from "../Routes/Detail";
import About from "../Routes/About/index.js";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/:id" exact component={Detail} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
