import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = /* Check if the user is logged in */ true; // Replace with your authentication logic

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const DashboardRoutes = () => {
  return (
    <div>
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default DashboardRoutes;
