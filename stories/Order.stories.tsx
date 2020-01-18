import React from 'react';

import Order from 'components/contrib/Order';

export default {
  title: 'Order',
};

const DUMMY_ORDER = [
  { id: 1, menu: '아메리카노' },
  { id: 2, menu: '아메리카노' },
];

export const order = () => (
  <>
    {DUMMY_ORDER.map(order => (
      <Order key={order.id} order={order} />
    ))}
  </>
);
