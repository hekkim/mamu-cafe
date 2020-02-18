import styled from 'styled-components';

import { flexStyle } from 'styles/flex';
import { Colors } from 'styles/colors';
import { Size } from 'styles/typograhpy';

const Container = styled.div`
  ${flexStyle()}
  width: 100%;
  background-color: ${Colors.White};
  margin-top: 2rem;
`;

const Thumbnail = styled.img`
  flex: 1 1 auto;
  max-width: 10rem;
`;

const Name = styled.div`
  font-size: ${Size.Subtitle};
`;

const Price = styled.div`
  color: ${Colors.Grey900};
`;

const Styles = {
  Container,
  Thumbnail,
  Name,
  Price,
};

export default Styles;
