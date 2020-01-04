import React from 'react';

import { StoreProvider } from 'store';
import GlobalStyle from 'styles/global';

import RootRouter from './RootRouter';

const App = () => (
  <>
    <StoreProvider>
      <RootRouter />
    </StoreProvider>
    <GlobalStyle />
  </>
);

export default App;
