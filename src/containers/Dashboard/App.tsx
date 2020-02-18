import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from 'constants/routes';
import { Container } from 'components/common';
import { Drawer, Navbar } from 'components/contrib';
import { useStore } from 'store';

import DashboardRouter from './DashboardRouter';
import * as Styled from './style';

const Dashboard = observer(() => {
  const { auth: authStore, merchant: merchantStore } = useStore([
    'auth',
    'merchant',
  ]);

  useEffect(() => {
    if (!authStore.authUser) {
      return;
    }

    merchantStore.getMerchant();
  }, [authStore.authUser]);

  if (!authStore.authUser) {
    return <Redirect to={routes.login} />;
  }

  return (
    <Styled.DashboardContainer>
      <Navbar title="MAMÜ">
        <Navbar.Button onClick={authStore.signOut}>Logout</Navbar.Button>
      </Navbar>
      <Styled.DashboardBody>
        <Drawer>
          <Drawer.Button to={routes.order}>Order</Drawer.Button>
          <Drawer.Button to={routes.menu}>Menu</Drawer.Button>
        </Drawer>
        <Container>
          <DashboardRouter />
        </Container>
      </Styled.DashboardBody>
    </Styled.DashboardContainer>
  );
});

export default Dashboard;
