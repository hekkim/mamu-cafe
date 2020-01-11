import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router';

import { Button } from 'components/common';
import { useStore } from 'store';
import routes from 'constants/routes';

import { LoginContainer } from './style';

const Login = observer(() => {
  const authStore = useStore('auth');

  useEffect(() => {
    authStore.loadOAuth();
  }, []);

  if (authStore.auth) {
    return <Redirect to={routes.dashboard} />;
  }

  return (
    <LoginContainer>
      <Button onClick={authStore.signIn}>Login</Button>
    </LoginContainer>
  );
});

export default Login;
