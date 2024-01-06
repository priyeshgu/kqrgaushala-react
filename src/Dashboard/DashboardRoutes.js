// export default DashboardRoutes;
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Components/login'; // Import the Login component
import { Button } from 'react-bootstrap';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

const DashboardRoutes = () => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    // Perform your login logic here, set isLoggedIn to true if successful
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    // Perform your logout logic here, set isLoggedIn to false
    setLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <div>
      <div className='d-flex flex-row justify-content-center'>
        {isLoggedIn && (
          <Button variant="secondary" onClick={handleLogout}>Logout</Button>)}
          </div>
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        isLoggedIn={isLoggedIn}
      />
      {!isLoggedIn && <Route exact path="/dashboard" render={() => <Login onLogin={handleLogin} />} />}
    </div>
  );
};

export default DashboardRoutes;

