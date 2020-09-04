import React, { Component, Route } from "react";
import { Redirect } from "react-router-dom";
export const protectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        auth ? <Component /> : <Redirect to="login" />
      }
    ></Route>
  );
};