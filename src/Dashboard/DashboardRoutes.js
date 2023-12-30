// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import Dashboard from './Dashboard';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = /* Check if the user is logged in */ true; // Replace with your authentication logic

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

// const DashboardRoutes = () => {
//   return (
//     <div>
//       <PrivateRoute path="/dashboard" component={Dashboard} />
//     </div>
//   );
// };

// export default DashboardRoutes;
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Components/login'; // Import the Login component

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
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here, set isLoggedIn to true if successful
    setLoggedIn(true);
  };

  return (
    <div>
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
