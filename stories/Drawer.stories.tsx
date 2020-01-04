import React from 'react';
import styled from 'styled-components';

import { Drawer } from 'components/contrib';
import { flexStyle } from 'styles/flex';

export default {
  title: 'Drawer',
};

const FlexBox = styled.div`
  ${flexStyle()}
`;

export const drawer = () => (
  <FlexBox>
    <Drawer>
      <Drawer.Button>First page</Drawer.Button>
      <Drawer.Button>Second page</Drawer.Button>
      <Drawer.Button>Third page</Drawer.Button>
    </Drawer>
  </FlexBox>
);
