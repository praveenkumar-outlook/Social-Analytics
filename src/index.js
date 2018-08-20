import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./Store/store";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap";

window.FB.init({
  appId: "506449243159585",
  cookie: true,
  xfbml: true,
  version: "v3.1"
});

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("app")
);
