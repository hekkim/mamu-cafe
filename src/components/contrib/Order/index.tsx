import React from 'react';

import Styled from './style';

const Order = ({ order }) => (
  <Styled.OrderContainer>
    <Styled.OrderText>{order.menu}</Styled.OrderText>
    <Styled.OrderButton theme="green" onClick={() => console.log(order)}>
      Done
    </Styled.OrderButton>
    <Styled.OrderButton theme="red" onClick={() => console.log(order)}>
      Cancel
    </Styled.OrderButton>
  </Styled.OrderContainer>
);

export default Order;
