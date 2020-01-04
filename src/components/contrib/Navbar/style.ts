import styled from 'styled-components';

import { Colors } from 'styles/colors';
import { Size, Weight } from 'styles/typograhpy';
import { flexStyle } from 'styles/flex';

export const NavbarTitle = styled.h1`
  font-size: ${Size.Header};
  font-weight: ${Weight.Bold};
`;

export const NavbarActions = styled.div`
  margin-left: auto;
  height: 100%;
`;

export const NavbarButton = styled.button`
  font-size: ${Size.Body};
  font-weight: ${Weight.Medium};
`;

export const Navbar = styled.nav`
  ${flexStyle({ alignItems: 'center' })}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: ${Colors.Brown};
  color: ${Colors.Grey100};
`;
