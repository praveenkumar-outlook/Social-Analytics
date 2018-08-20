import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./Components/App/App.react";
import Login from "./Components/Login/Login.react";

const AppRouter = () => (
  <Router basename="/">
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  </Router>
);
export default AppRouter;
