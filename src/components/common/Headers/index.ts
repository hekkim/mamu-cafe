import styled from 'styled-components';

import { Size, Weight } from 'styles/typograhpy';

export const Header = styled.h1`
  font-size: ${Size.Header};
  font-weight: ${Weight.Bold};
  margin: 1rem 0;
`;

export const Title = styled.h2`
  font-size: ${Size.Title};
  font-weight: ${Weight.Bold};
  margin: 0.8rem 0;
`;

export const Subtitle = styled.h3`
  font-size: ${Size.Subtitle};
  font-weight: ${Weight.Medium};
  margin: 0.6rem 0;
`;
