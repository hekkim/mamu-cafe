import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from 'containers';
import { Loading } from 'components/common';
import routes from 'constants/routes';

const RootRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={routes.login} component={Login} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootRouter;
