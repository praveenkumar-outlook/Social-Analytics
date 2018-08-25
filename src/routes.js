import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Container from "./Components/Container/Container.react";
import Login from "./Components/Login/Login.react";
import Home from "./Components/Home/Home.react";

const AppRouter = () => (
  <Router basename="/">
    <div className="ui-route">
      <Route exact path="/" render={(props) =>
        <Container {...props}>
          <Home></Home>
        </Container>
      }>
      </Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  </Router>
);
export default AppRouter;
