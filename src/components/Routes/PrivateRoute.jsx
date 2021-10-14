import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({...all}) => {
  const token = localStorage.getItem("stackmedia_token");

  if (!token) {
    return <Redirect auth={false} to="/" />;
  }

  return <Route auth={true} {...all} />;
};

export default PrivateRoute;
