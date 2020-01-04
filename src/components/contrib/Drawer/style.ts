import styled from 'styled-components';

import { Colors } from 'styles/colors';
import { Size, Weight } from 'styles/typograhpy';
import { mediaSizes, respondMore } from 'styles/media';

export type DrawerProps = {
  isExpanded: boolean;
};

export const Drawer = styled.aside<DrawerProps>`
  flex: 0 0 8rem;
  background-color: ${Colors.Maroon};

  ${respondMore(mediaSizes.tablet)`
    flex-basis: ${p => (p.isExpanded ? 8 : 24)}rem;
  `}
`;

export const DrawerButton = styled.button`
  display: block;
  font-size: ${Size.Body};
  font-weight: ${Weight.Medium};
  color: ${Colors.Grey100};
  background-color: transparent;
  transition: 225ms;

  &:hover {
    color: ${Colors.Grey200};
  }
`;

export const DrawerToggler = styled(DrawerButton)`
  display: none;
  background-color: ${Colors.MaroonDark};

  ${respondMore(mediaSizes.tablet)`
    display: block;
  `}
`;
