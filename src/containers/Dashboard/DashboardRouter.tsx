import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from 'constants/routes';
import { Menu, Order } from 'containers';

const DashboardRouter = () => (
  <Switch>
    <Route path={routes.menu} component={Menu} />
    <Route path={routes.order} component={Order} />
    <Redirect to={routes.menu} />
  </Switch>
);

export default DashboardRouter;
