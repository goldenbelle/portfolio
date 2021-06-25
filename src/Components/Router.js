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
import Projects from "../Routes/Projects";
import Resume from "../Routes/Resume/index.js";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/web" exact component={Projects} />
      <Route path="/portfolio/graphic" exact component={Projects} />
      <Route path="/portfolio/:id" component={Detail} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
