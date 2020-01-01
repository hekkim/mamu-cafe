import React from 'react';

import { Navbar } from 'components/contrib';

export default {
  title: 'Navbar',
};

export const withTitle = () => (
  <Navbar title="MAMÜ">
    <Navbar.Button>Toggle</Navbar.Button>
  </Navbar>
);
