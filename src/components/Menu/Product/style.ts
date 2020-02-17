import styled from 'styled-components';

import { flexStyle } from 'styles/flex';
import { Colors } from 'styles/colors';
import { Size } from 'styles/typograhpy';

const ProductContainer = styled.div`
  ${flexStyle()}
  width: 100%;
  background-color: ${Colors.White};

  & + & {
    margin-top: 2rem;
  }
`;

const ProductThumbnail = styled.img`
  flex: 1 1 auto;
  max-width: 10rem;
`;

const ProductName = styled.div`
  font-size: ${Size.Subtitle};
`;

const ProductPrice = styled.div`
  color: ${Colors.Grey900};
`;

const Styles = {
  ProductContainer,
  ProductThumbnail,
  ProductName,
  ProductPrice,
};

export default Styles;
