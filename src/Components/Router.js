import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Nav from "./Nav";
import Contact from "../Routes/Contact";
import Home from "../Routes/Home";
import Projects from "../Routes/Projects";
import Resume from "../Routes/Resume";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
