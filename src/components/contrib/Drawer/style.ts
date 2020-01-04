import styled from 'styled-components';

import { Button } from 'components/common';
import { Colors } from 'styles/colors';
import { mediaSizes, respondMore } from 'styles/media';
import { Transition } from 'styles/transition';

export type DrawerProps = {
  isExpanded: boolean;
};

export const Drawer = styled.aside<DrawerProps>`
  flex: 0 0 8rem;
  background-color: ${Colors.Maroon};
  height: 100%;

  ${respondMore(mediaSizes.tablet)(`
    flex-basis: ${p => (p.isExpanded ? '8rem' : '24rem')};
  `)}
`;

export const DrawerButton = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 0;
  text-align: center;
  transition: ${Transition.Fast};

  &:hover {
    color: ${Colors.Grey200};
  }

  ${respondMore(mediaSizes.tablet)`
    text-align: left;
  `}
`;
DrawerButton.defaultProps = {
  theme: 'maroon',
};

export const DrawerToggler = styled(DrawerButton)`
  display: none;

  ${respondMore(mediaSizes.tablet)`
    display: block;
    text-align: center;
  `}
`;
