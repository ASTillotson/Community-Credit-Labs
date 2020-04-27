import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";


import AdminLayout from "layouts/AdminLayout.jsx";
import UserLayout from "layouts/UserLayout.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/">
        <Redirect to="/admin" />
      </Route>
      <Route exact path="/admin">
        <Redirect to="/admin/dashboard" />
      </Route>
      <Route exact path="/user">
        <Redirect to="/user/usercourse" />
      </Route>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/user" render={props => <UserLayout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
