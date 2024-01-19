// export default DashboardRoutes;
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Components/login'; // Import the Login component



const PrivateRoute = ({ component: Component, isLoggedIn, handleLogout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/dashboard" />
        )
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
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout} // Pass handleLogout as a prop
      />
      {!isLoggedIn && <Route exact path="/dashboard" render={() => <Login onLogin={handleLogin} />} />}
    </div>
  );
};

export default DashboardRoutes;

