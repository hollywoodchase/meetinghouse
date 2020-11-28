

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Estimate from "./components/estimate";
import Services from "./components/services";
import Nav from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/estimate">
            <Estimate />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


