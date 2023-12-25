// Dashboard.js

import React from 'react';
import { Route, Switch, Link, useRouteMatch, useHistory } from 'react-router-dom';
import Products from './Products';
import Donors from './Donors';

const Dashboard = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const handleLogout = () => {
    // Add logout logic here
    history.push('/login');
  };

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', background: '#f0f0f0' }}>
          <ul>
            <li>
              <Link to={`${match.url}/products`}>Products</Link>
            </li>
            <li>
              <Link to={`${match.url}/donors`}>Donors</Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <Switch>
            <Route path={`${match.path}/products`}>
              <Products />
            </Route>
            <Route path={`${match.path}/donors`}>
              <Donors />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
