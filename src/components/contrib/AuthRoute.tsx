import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from 'constants/routes';
import { useStore } from 'store';

type Props = RouteProps;

const AuthRoute: FC<Props> = observer(
  ({ component: Component, ...routeProps }) => {
    const authStore = useStore('auth');

    return (
      <Route
        {...routeProps}
        render={props =>
          authStore.authUser && Component ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: routes.login,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
);

export default AuthRoute;
