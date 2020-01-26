import _ from 'lodash';
import React, { FC } from 'react';

import { Order as TypeOrder } from 'types/order';

import Styled from './style';

type Props = {
  order: TypeOrder;
};

const Order: FC<Props> = ({ order }) => (
  <Styled.OrderContainer>
    <Styled.OrderThumbnail src={_.head(order.order_items)!.menu_id.image} />
    <Styled.OrderBody>
      <Styled.OrderTitle>{`No. ${order.id}`}</Styled.OrderTitle>
      <Styled.OrderDetail>
        {order.order_items.map(({ menu_id, quantity }) => (
          <li key={`${menu_id.id}-${quantity}`}>
            {`${menu_id.name} - ${menu_id}`}
          </li>
        ))}
      </Styled.OrderDetail>
    </Styled.OrderBody>
    <Styled.OrderButton theme="green" onClick={() => console.log(order)}>
      Done
    </Styled.OrderButton>
  </Styled.OrderContainer>
);

export default Order;
