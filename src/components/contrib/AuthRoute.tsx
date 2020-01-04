import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from 'constants/routes';
import { ActionStatus } from 'types/ActionStatus';

// import ChatNotification from './ChatNotification';

const mapState = (state: StoreState) => ({
  auth: state.auth,
});

type Props = ReturnType<typeof mapState> & RouteProps;

const AuthRoute: FC<Props> = observer(
  ({ component: Component, ...routeProps }) => {
    const authStore = useStore('auth');

    return (
      <Route
        {...routeProps}
        render={props =>
          authStore.status === ActionStatus.Success &&
          authStore.user &&
          Component ? (
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
