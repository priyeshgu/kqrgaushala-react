import React from 'react';
import Homepage from './pages/Landing/Landing';
import Aboutpage from './pages/Aboutpage/About';
import Contactpage from './pages/Contactpage/Contactpage';
import PolicyPage from './pages/Policypage/Policypage';
import Donatepage from './pages/Donate/Donate';
import DashboardRoutes from './Dashboard/DashboardRoutes';

import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

const Header = React.lazy(() => import('./components/common/Header/Header'));
const Footer = React.lazy(() => import('./components/common/Footer/Footer'));

const AppRoutes = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div>
      {isLandingPage ? null : <Header />}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/contact" component={Contactpage} />
        <Route path="/donate" component={Donatepage} />
        <Route path="/policy" component={PolicyPage} />
        <DashboardRoutes />
      </Switch>
      <Footer />
    </div>
  );
};

const Routes = () => (
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </React.Suspense>
  </Router>
);

export default Routes;
