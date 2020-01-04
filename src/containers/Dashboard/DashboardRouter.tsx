import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from 'constants/routes';

const DashboardRouter = () => (
  <Switch>
    <Route path={routes.menu} component={() => <div>Menu</div>} />
    <Route path={routes.order} component={() => <div>Order</div>} />
    <Redirect to={routes.menu} />
  </Switch>
);

export default DashboardRouter;
