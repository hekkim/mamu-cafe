import styled from 'styled-components';

import { Button } from 'components/common';
import { Colors } from 'styles/colors';
import { Size, Weight } from 'styles/typograhpy';
import { flexStyle } from 'styles/flex';

export const NavbarTitle = styled.h1`
  padding: 1rem 1.6rem;
  font-size: ${Size.Header};
  font-weight: ${Weight.Bold};
`;

export const NavbarActions = styled.div`
  margin-left: auto;
  height: 100%;
`;

export const NavbarButton = styled(Button)`
  height: 100%;
`;
NavbarButton.defaultProps = {
  theme: 'brown',
};

export const Navbar = styled.nav`
  ${flexStyle({ alignItems: 'center' })}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${Colors.Brown};
  color: ${Colors.WhiteText};
`;
