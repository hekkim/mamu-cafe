import styled, { css } from 'styled-components';

import { Colors } from 'styles/colors';
import { Transition } from 'styles/transition';
import { Size, Weight } from 'styles/typograhpy';

type ButtonTheme = 'green' | 'yellow' | 'red' | 'maroon' | 'brown';

type ButtonSize = 'small' | 'normal';

type ButtonProps = {
  theme?: ButtonTheme;
  size?: ButtonSize;
};

const getButtonTheme = (theme?: ButtonTheme) => {
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

const getButtonSize = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.6rem 1rem;
        font-size: ${Size.Small};
      `;
    case 'normal':
    default:
      return css`
        padding: 1rem 1.6rem;
        font-size: ${Size.Body};
      `;
  }
};

const Button = styled.button<ButtonProps>`
  ${p => getButtonTheme(p.theme)}
  ${p => getButtonSize(p.size)}

  border: 0;
  border-radius: 4px;
  font-weight: ${Weight.Medium};
  transition: ${Transition.Fast};

  &:disabled {
    background-color: ${Colors.Disable};
    cursor: not-allowed;
  }
`;

export default Button;
