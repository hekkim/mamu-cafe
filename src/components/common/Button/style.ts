import styled, { css } from 'styled-components';

import { Colors } from 'styles/colors';
import { Transition } from 'styles/transition';

type ButtonTheme = 'green' | 'yellow' | 'red' | 'maroon' | 'brown';

export type ButtonProps = {
  theme: ButtonTheme;
};

const getButtonTheme = (theme: ButtonTheme) => {
  switch (theme) {
    case 'green':
      return css`
        color: ${Colors.WhiteText};
        background-color: ${Colors.Green};

        &:hover {
          background-color: ${Colors.GreenDark};
        }

        &:active {
          background-color: ${Colors.GreenDarker};
        }
      `;
    case 'yellow':
      return css`
        color: ${Colors.Text};
        background-color: ${Colors.Yellow};

        &:hover {
          background-color: ${Colors.YellowDark};
        }

        &:active {
          background-color: ${Colors.YellowDarker};
        }
      `;
    case 'red':
      return css`
        color: ${Colors.WhiteText};
        background-color: ${Colors.Red};

        &:hover {
          background-color: ${Colors.RedDark};
        }

        &:active {
          background-color: ${Colors.RedDarker};
        }
      `;
    case 'maroon':
      return css`
        color: ${Colors.WhiteText};
        background-color: ${Colors.Maroon};

        &:hover {
          background-color: ${Colors.MaroonDark};
        }

        &:active {
          background-color: ${Colors.MaroonDarker};
        }
      `;
    case 'brown':
    default:
      return css`
        color: ${Colors.WhiteText};
        background-color: ${Colors.Brown};

        &:hover {
          background-color: ${Colors.BrownDark};
        }

        &:active {
          background-color: ${Colors.BrownDarker};
        }
      `;
  }
};

export const Button = styled.button<ButtonProps>`
  ${p => getButtonTheme(p.theme)}

  padding: 1rem 1.6rem;
  border: 0;
  border-radius: 4px;
  transition: ${Transition.Fast};

  &:disable {
    background-color: ${Colors.Disable};
    cursor: disable;
  }
`;
