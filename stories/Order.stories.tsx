import React from 'react';

import Order from 'components/contrib/Order';

export default {
  title: 'Order',
};

const DUMMY_ORDER = [
  {
    id: 1,
    status: 'PENDING',
    create_at: '2020-01-10 03:09:50',
    last_updated_time: '2020-01-10 03:09:50',
    merchant_id: 1,
    merchant_name: 'mmt-cafe',
    order_items: [
      {
        menu_id: {
          id: 1,
          name: '아메리카노',
          image:
            'http://image.enuri.info/webimage_300/2763700000/2763720000/2763720447',
          price: '3000.00',
          currency: 'KO',
          quantity: 2,
          merchant_id: 1,
          closed: true,
          created_at: '2020-01-10T03:12:33.234473Z',
        },
        quantity: 2,
        menu_price: '3000.00',
        total_price: '6000.00',
      },
    ],
  },
  {
    id: 2,
    status: 'PENDING',
    create_at: '2020-01-10 03:09:50',
    last_updated_time: '2020-01-10 03:09:50',
    merchant_id: 1,
    merchant_name: 'mmt-cafe',
    order_items: [
      {
        menu_id: {
          id: 1,
          name: '아메리카노',
          image:
            'http://image.enuri.info/webimage_300/2763700000/2763720000/2763720447',
          price: '3000.00',
          currency: 'KO',
          quantity: 2,
          merchant_id: 1,
          closed: true,
          created_at: '2020-01-10T03:12:33.234473Z',
        },
        quantity: 2,
        menu_price: '3000.00',
        total_price: '6000.00',
      },
    ],
  },
];

export const order = () => (
  <>
    {DUMMY_ORDER.map(order => (
      <Order key={order.id} order={order} />
    ))}
  </>
);
