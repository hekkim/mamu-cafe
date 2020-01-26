import styled from 'styled-components';

import { Colors } from 'styles/colors';
import { Button } from 'components/common';
import { flexStyle } from 'styles/flex';
import { Size } from 'styles/typograhpy';

const OrderContainer = styled.div`
  ${flexStyle()}
  width: 100%;
  background-color: ${Colors.White};

  & + & {
    margin-top: 2rem;
  }
`;

const OrderThumbnail = styled.img`
  flex: 1 1 auto;
  max-width: 10rem;
`;

const OrderButton = styled(Button)`
  flex: 0 0 auto;
  padding: 2rem;
  border: 0;
  border-radius: 0;
  text-align: center;
`;

const OrderBody = styled.div`
  flex: 1 1 auto;
  padding: 2rem;
  color: ${Colors.Text};
`;

const OrderTitle = styled.div`
  font-size: ${Size.Small};
`;

const OrderDetail = styled.ul`
  margin-top: 0.8rem;
  font-size: ${Size.Body};
`;

const Styles = {
  OrderContainer,
  OrderThumbnail,
  OrderButton,
  OrderBody,
  OrderTitle,
  OrderDetail,
};

export default Styles;
