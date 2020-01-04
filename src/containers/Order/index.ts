import { lazy } from 'react';

export const Order = lazy(() =>
  import(/* webpackChunkName: 'dashboard.order' */ './App')
);
