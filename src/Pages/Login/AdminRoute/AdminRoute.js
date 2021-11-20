import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Spinner
        className="m-auto p-4 mt-3"
        animation="border"
        variant="primary"
      />
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ||  admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
