import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Container from "./Components/Container/Container.react";
import Login from "./Components/Login/Login.react";
import Home from "./Components/Home/Home.react";

const AppRouter = () => (
  <Router basename="/">
    <div className="ui-route">
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/">
          <Container>
            <Route exact component={Home}></Route>
            <Route exact path="activity" component={Home}></Route>
          </Container>
        </Route>
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
