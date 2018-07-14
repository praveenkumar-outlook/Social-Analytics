import React from "react";
import ReactDOM from "react-dom";
import store from "./Store/store";
import {Provider} from "react-redux";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap";

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("app")
);
