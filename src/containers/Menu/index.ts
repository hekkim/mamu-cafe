import { lazy } from 'react';

export const Menu = lazy(() =>
  import(/* webpackChunkName: 'dashboard.menu' */ './App')
);
