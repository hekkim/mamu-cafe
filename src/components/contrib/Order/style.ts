import styled from 'styled-components';

import { Colors } from 'styles/colors';
import { Button } from 'components/common';
import { flexStyle } from 'styles/flex';

const OrderContainer = styled.div`
  ${flexStyle()}
  width: 100%;
  background-color: ${Colors.White};
`;

const OrderButton = styled(Button)`
  flex: 0 0 auto;
  padding: 2rem;
  border: 0;
  text-align: center;
`;

const OrderText = styled.div`
  flex: 1 1 auto;
  padding: 2rem;
  color: ${Colors.Text};
`;

const Styles = {
  OrderContainer,
  OrderButton,
  OrderText,
};

export default Styles;
