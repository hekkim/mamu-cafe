import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Loading } from 'components/common';
import { AuthRoute } from 'components/contrib';
import { Dashboard, Login } from 'containers';
import routes from 'constants/routes';

const RootRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <AuthRoute path={routes.dashboard} component={Dashboard} />
          <Route path={routes.login} component={Login} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootRouter;
