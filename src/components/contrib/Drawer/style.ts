import styled from 'styled-components';

import { Colors } from 'styles/colors';
import { Size, Weight } from 'styles/typograhpy';
import { mediaSizes, respondMore } from 'styles/media';
import { Transition } from 'styles/transition';

export type DrawerProps = {
  isExpanded: boolean;
};

export const Drawer = styled.aside<DrawerProps>`
  flex: 0 0 8rem;
  background-color: ${Colors.Maroon};
  height: 100%;

  ${respondMore(mediaSizes.tablet)`
    flex-basis: ${p => (p.isExpanded ? 8 : 24)}rem;
  `}
`;

export const DrawerButton = styled.button`
  display: block;
  border: 0;
  width: 100%;
  font-size: ${Size.Body};
  font-weight: ${Weight.Medium};
  color: ${Colors.Grey100};
  text-align: center;
  background-color: transparent;
  transition: ${Transition.Fast};

  &:hover {
    color: ${Colors.Grey200};
  }

  ${respondMore(mediaSizes.tablet)`
    text-align: left;
  `}
`;

export const DrawerToggler = styled(DrawerButton)`
  display: none;
  background-color: ${Colors.MaroonDark};

  ${respondMore(mediaSizes.tablet)`
    display: block;
    text-align: center;
  `}
`;
