import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { Title } from 'components/common';
import { useStore } from 'store';

const Order = observer(() => {
  const orderStore = useStore('order');

  useEffect(() => {
    orderStore.pollOrderList();

    return () => {
      orderStore.cancelPollOrderList();
    };
  }, []);

  return (
    <>
      <Title>Waiting Orders</Title>
    </>
  );
});

export default Order;
