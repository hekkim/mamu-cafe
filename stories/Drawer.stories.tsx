import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Drawer } from 'components/contrib';
import { flexStyle } from 'styles/flex';

export default {
  title: 'Drawer',
};

const FlexBox = styled.div`
  ${flexStyle()}
`;

export const drawer = () => (
  <Router>
    <FlexBox>
      <Drawer>
        <Drawer.Button to="#first-page">First page</Drawer.Button>
        <Drawer.Button to="#second-page">Second page</Drawer.Button>
        <Drawer.Button to="#third-page">Third page</Drawer.Button>
      </Drawer>
    </FlexBox>
  </Router>
);
