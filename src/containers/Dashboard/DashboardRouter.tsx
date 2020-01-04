import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'constants/routes';

const DashboardRouter = () => (
  <Switch>
    <Route path={routes.menu} component={() => <div>Menu</div>} />
    <Route path={routes.order} component={() => <div>Order</div>} />
  </Switch>
);

export default DashboardRouter;
