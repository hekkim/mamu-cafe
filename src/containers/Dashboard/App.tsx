import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from 'constants/routes';
import { Drawer, Navbar } from 'components/contrib';
import { useStore } from 'store';

import DashboardRouter from './DashboardRouter';
import * as Styled from './style';

const Dashboard = observer(() => {
  const authStore = useStore('auth');

  if (!authStore.auth) {
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
        <DashboardRouter />
      </Styled.DashboardBody>
    </Styled.DashboardContainer>
  );
});

export default Dashboard;
